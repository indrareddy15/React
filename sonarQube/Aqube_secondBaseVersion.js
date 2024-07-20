const axios = require("axios");
const ExcelJS = require("exceljs");

// Define your SonarQube server and project key
const sonarqubeUrl = "https://platformops.ramcouat.com/sonarqube/";
const projectKey = "Runtime_Ramco.RelyingPartySolution";

// Define your SonarQube token
const token = "sqa_fc381828ca508853fa3fd344874d74b6455eb2dd";

// Create the Base64 encoded string for the Authorization header
const auth = Buffer.from(`${token}:`).toString("base64");

// Function to fetch issues from SonarQube
async function fetchIssues(issueType) {
  const apiUrl = `${sonarqubeUrl}/api/issues/search?componentKeys=${projectKey}&types=${issueType}`;
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    return response.data.issues;
  } catch (error) {
    console.error(`Error fetching ${issueType} issues:`, error);
    return [];
  }
}

// Function to process issues and create an Excel file
async function createExcelFile(bugs, codeSmells, vulnerabilities) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Issue Report");

  // Define the columns for the worksheet
  worksheet.columns = [
    { header: "Project", key: "project", width: 30 },
    { header: "Severity", key: "severity", width: 15 },
    { header: "Component", key: "component", width: 30 },
    { header: "Line", key: "line", width: 10 },
    { header: "Message", key: "message", width: 50 },
    { header: "Type", key: "type", width: 15 },
  ];

  // Helper function to add issues to the worksheet
  const addIssuesToWorksheet = (issues, type) => {
    issues.forEach((issue) => {
      const row = {
        project: issue.project,
        severity: issue.severity,
        component: issue.component,
        line: issue.line || "",
        message: issue.message,
        type: type,
      };
      worksheet.addRow(row);
    });
  };

  // Add issues to the worksheet
  addIssuesToWorksheet(bugs, "BUG");
  addIssuesToWorksheet(codeSmells, "CODE_SMELL");
  addIssuesToWorksheet(vulnerabilities, "VULNERABILITY");

  // Save the workbook to a file
  await workbook.xlsx.writeFile(`${projectKey}.xlsx`);
  console.log(
    "Issue report has been successfully exported to issue_report.xlsx"
  );
}

// Main function to execute the process
async function main() {
  const bugs = await fetchIssues("BUG");
  const codeSmells = await fetchIssues("CODE_SMELL");
  const vulnerabilities = await fetchIssues("VULNERABILITY");

  if (bugs.length > 0 || codeSmells.length > 0 || vulnerabilities.length > 0) {
    await createExcelFile(bugs, codeSmells, vulnerabilities);
  } else {
    console.log("No issues found or error occurred while fetching issues.");
  }
}

// Run the main function
main();
