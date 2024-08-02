import React, { useState } from "react";
import axios from "axios";
import ExcelJS from "exceljs";
import "./FileApp.css";

const sonarqubeUrl = "https://platformops.ramcouat.com/sonarqube/";
const token = "sqa_fc381828ca508853fa3fd344874d74b6455eb2dd";
const auth = btoa(`${token}:`);

async function fetchAllIssues(projectKey, issueType) {
  const issues = [];
  let page = 1;
  const pageSize = 500;

  while (true) {
    // const apiUrl = `${sonarqubeUrl}/api/issues/search?componentKeys=${projectKey}&types=${issueType}&p=${page}&ps=${pageSize}`;
    const apiUrl = `/${sonarqubeUrl}/api/issues/search?componentKeys=${projectKey}&types=${issueType}&p=${page}&ps=${pageSize}`;
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      });

      if (response.data.issues.length === 0) {
        break;
      }

      issues.push(...response.data.issues);

      if (response.data.paging.total <= page * pageSize) {
        break;
      }

      page += 1;
    } catch (error) {
      console.error(
        `Error fetching ${issueType} issues for project ${projectKey}:`,
        error
      );
      break;
    }
  }

  return issues;
}

async function createExcelFile(issuesByProject) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Issue Report");

  worksheet.columns = [
    { header: "Project", key: "project", width: 30 },
    { header: "Type", key: "type", width: 15 },
    { header: "Count", key: "count", width: 10 },
    { header: "Severity", key: "severity", width: 15 },
    { header: "Component", key: "component", width: 30 },
    { header: "Line", key: "line", width: 10 },
    { header: "Message", key: "message", width: 50 },
  ];

  const addIssuesToWorksheet = (issues, type, projectKey) => {
    if (issues.length > 0) {
      worksheet.addRow({
        project: projectKey,
        type: type,
        count: issues.length,
      });
      issues.forEach((issue) => {
        worksheet.addRow({
          project: "",
          type: "",
          count: "",
          severity: issue.severity,
          component: issue.component,
          line: issue.line || "",
          message: issue.message,
        });
      });
    } else {
      worksheet.addRow({ project: projectKey, type: type, count: 0 });
    }
    worksheet.addRow({});
  };

  for (const projectKey in issuesByProject) {
    const { bugs, codeSmells, vulnerabilities } = issuesByProject[projectKey];
    addIssuesToWorksheet(bugs, "BUG", projectKey);
    addIssuesToWorksheet(vulnerabilities, "VULNERABILITY", projectKey);
  }

  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "SonarQube_Issue_Report.xlsx";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const App = () => {
  const [projectName, setProjectName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    if (!projectName) {
      alert("Please enter a project name.");
      return;
    }

    setIsLoading(true);

    const issuesByProject = {};

    try {
      const bugs = await fetchAllIssues(projectName, "BUG");
      const codeSmells = await fetchAllIssues(projectName, "CODE_SMELL");
      const vulnerabilities = await fetchAllIssues(
        projectName,
        "VULNERABILITY"
      );

      issuesByProject[projectName] = { bugs, codeSmells, vulnerabilities };

      await createExcelFile(issuesByProject);
    } catch (error) {
      console.error("Error creating the report:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      {/* <h1 className="title">SonarQube Issue Report</h1> */}
      <input
        type="text"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="Enter Project Name"
        className="input"
      />
      <button onClick={handleDownload} className="button" disabled={isLoading}>
        {isLoading ? "Generating..." : "Download Excel Report"}
      </button>
    </div>
  );
};

export default App;
