const axios = require("axios");
const ExcelJS = require("exceljs");

// Define your SonarQube server and array of project keys
const sonarqubeUrl = "https://platformops.ramcouat.com/sonarqube/";
const projectKeys = [
  // "Runtime_AppConfig",
  // "Runtime_CommonCutil",
  // "Runtime_ComponentRouting",
  // "Runtime_Ramco.ILogger",
  // "Runtime_Ramco.Logger",
  // "Runtime_Ramco.Profiler",
  // "Runtime_Ramco.RelyingPartySolution",
  // "Runtime_Ramco.ValidateUser",
  // "Runtime_Ramco.VW.RT.ApiProxy",
  // "Runtime_Ramco.VW.RT.ClientCommunicatorService",
  // "Runtime_Ramco.VW.RT.Eventing",
  // "Runtime_Ramco.VW.RT.Expression",
  // "Runtime_Ramco.VW.RT.GatewayServices",
  // "Runtime_Ramco.VW.RT.License.XMLGenerator",
  // "Runtime_Ramco.VW.RT.License.XMLParser",
  // "Runtime_Ramco.VW.RT.Maintenance",
  // "Runtime_Ramco.VW.RT.Report.Document",
  // "Runtime_Ramco.VW.RT.Types",
  // "Runtime_Ramco.VW.RT.Web",
  // "Runtime_Ramco.VW.RT.Web.Logger",
  // "Runtime_Ramco.VW.RT.Web.PluginXML",
  // "Runtime_Ramco.VW.Vault",
  // "Runtime_RMInfo",
  // "Runtime_RVWAsyncUtility",
  // "Runtime_Virtualworks.UploadHandler",
  // "Runtime_Virtualworks20Counters.net",
  // "Runtime_VirtualWorksConfigRT",
  // "Runtime_VirtualWorksRT",
  // "Runtime_VWHelper",
  // "Runtime_VWMail",
  // "Runtime_Vwsecurity",
  // "Runtime_WebConfig",
  // "Runtime_VWInstallationCenter",
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

  // Add issues to the worksheet
  for (const projectKey in issuesByProject) {
    const { bugs, codeSmells, vulnerabilities } = issuesByProject[projectKey];
    console.log(`Processing project: ${projectKey}`);
    console.log(
      `Bugs: ${bugs.length}, Code Smells: ${codeSmells.length}, Vulnerabilities: ${vulnerabilities.length}`
    );
    addIssuesToWorksheet(bugs, "BUG", projectKey);
    // addIssuesToWorksheet(codeSmells, "CODE_SMELL", projectKey);
    addIssuesToWorksheet(vulnerabilities, "VULNERABILITY", projectKey);
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

    issuesByProject[projectKey] = { bugs, codeSmells, vulnerabilities };
  }

  await createExcelFile(issuesByProject);
}

// Run the main function
main();
