const axios = require("axios");
const ExcelJS = require("exceljs");

// Define your SonarQube server and array of project keys
const sonarqubeUrl = "https://platformops.ramcouat.com/sonarqube";
const projectKeys = [
  // Your project keys here
];

// Define your SonarQube token
const token = "sqa_fc381828ca508853fa3fd344874d74b6455eb2dd";

// Create the Base64 encoded string for the Authorization header
const auth = Buffer.from(`${token}:`).toString("base64");

// Function to fetch issues from SonarQube for a specific project and issue type
async function fetchAllIssues(projectKey, issueType) {
  const issues = [];
  let page = 1;
  const pageSize = 500; // Adjust page size as needed

  while (true) {
    const apiUrl = `${sonarqubeUrl}/api/issues/search?componentKeys=${projectKey}&types=${issueType}&p=${page}&ps=${pageSize}`;
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

// Function to fetch Security Hotspots
async function fetchSecurityHotspots(projectKey, issueStatus) {
  const hotspots = [];
  let page = 1;
  const pageSize = 500; // Adjust page size as needed

  while (true) {
    const apiUrl = `${sonarqubeUrl}/api/hotspots/search?projectKey=${projectKey}&p=${page}&ps=${pageSize}&status=${issueStatus}&onlyMine=false&inNewCodePeriod=false`;
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      });

      if (response.data.hotspots.length === 0) {
        break;
      }

      hotspots.push(...response.data.hotspots);

      if (response.data.paging.total <= page * pageSize) {
        break;
      }

      page += 1;
    } catch (error) {
      console.error(
        `Error fetching ${issueStatus} Hotspots for project ${projectKey}:`,
        error
      );
      break;
    }
  }

  return hotspots;
}

// Function to process issues and create an Excel file
async function createExcelFile(issuesByProject) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Issue Report");

  // Define the columns for the worksheet
  worksheet.columns = [
    { header: "Project", key: "project", width: 30 },
    { header: "Type", key: "type", width: 15 },
    { header: "Count", key: "count", width: 10 },
    { header: "Severity", key: "severity", width: 15 },
    { header: "Component", key: "component", width: 30 },
    { header: "Line", key: "line", width: 10 },
    { header: "Message", key: "message", width: 50 },
    { header: "Hotspot Status", key: "status", width: 15 },
    { header: "Hotspot Component", key: "hotspotComponent", width: 30 },
    { header: "Hotspot Line", key: "hotspotLine", width: 10 },
    { header: "Hotspot Message", key: "hotspotMessage", width: 50 },
  ];

  // Helper function to add issues to the worksheet
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
    worksheet.addRow({}); // Add an empty row after each type
  };

  // Helper function to add hotspots to the worksheet
  const addHotspotsToWorksheet = (hotspots, projectKey) => {
    if (hotspots.length > 0) {
      worksheet.addRow({
        project: projectKey,
        type: "TO_REVIEW",
        count: hotspots.length,
      });
      hotspots.forEach((hotspot) => {
        worksheet.addRow({
          project: "",
          type: "",
          count: "",
          status: hotspot.status,
          hotspotComponent: hotspot.component,
          hotspotLine: hotspot.line || "",
          hotspotMessage: hotspot.message,
        });
      });
    } else {
      worksheet.addRow({
        project: projectKey,
        type: "TO_REVIEW",
        count: 0,
      });
    }
    worksheet.addRow({}); // Add an empty row after each type
  };

  // Add issues and hotspots to the worksheet
  for (const projectKey in issuesByProject) {
    const { bugs, codeSmells, vulnerabilities, hotspots } =
      issuesByProject[projectKey];
    console.log(`Processing project: ${projectKey}`);
    console.log(
      `Bugs: ${bugs.length}, Code Smells: ${codeSmells.length}, Vulnerabilities: ${vulnerabilities.length}, Hotspots: ${hotspots.length}`
    );
    addIssuesToWorksheet(bugs, "BUG", projectKey);
    addIssuesToWorksheet(codeSmells, "CODE_SMELL", projectKey);
    addIssuesToWorksheet(vulnerabilities, "VULNERABILITY", projectKey);
    addHotspotsToWorksheet(hotspots, "TO_REVIEW", projectKey);
  }

  // Save the workbook to a file
  await workbook.xlsx.writeFile("SonarQube_Issue_Report.xlsx");
  console.log(
    "Issue report has been successfully exported to SonarQube_Issue_Report.xlsx"
  );
}

// Main function to execute the process
async function main() {
  const issuesByProject = {};

  for (const projectKey of projectKeys) {
    const bugs = await fetchAllIssues(projectKey, "BUG");
    const codeSmells = await fetchAllIssues(projectKey, "CODE_SMELL");
    const vulnerabilities = await fetchAllIssues(projectKey, "VULNERABILITY");
    const hotspots = await fetchSecurityHotspots(projectKey, "TO_REVIEW");

    issuesByProject[projectKey] = {
      bugs,
      codeSmells,
      vulnerabilities,
      hotspots,
    };
  }

  await createExcelFile(issuesByProject);
}

// Run the main function
main();
