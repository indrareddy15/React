const axios = require("axios");
const XLSX = require("xlsx");

// Function to fetch Security Hotspots from SonarQube API
async function fetchSecurityHotspots(apiUrl, authToken) {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Basic ${authToken}`,
      },
    });
    return response.data.issues;
  } catch (error) {
    console.error("Error fetching Security Hotspots:", error);
    return [];
  }
}

// Function to convert Security Hotspots data to Excel format
function convertToExcel(data) {
  const formattedData = data.map((issue) => ({
    Project: issue.project,
    Key: issue.key,
    Severity: issue.severity,
    Component: issue.component,
    Message: issue.message,
    Effort: issue.effort,
    Type: issue.type,
    Line: issue.textRange ? issue.textRange.startLine : "",
    Status: issue.status,
  }));

  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(formattedData);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Security Hotspots");
  return workbook;
}

// Function to download the Excel file
function downloadExcelFile(workbook, filename) {
  XLSX.writeFile(workbook, filename);
}

// Example usage
const sonarqubeBaseUrl = "https://platformops.ramcouat.com/sonarqube/";
const projectKey = "Runtime_VirtualWorksRT"; // Replace with your SonarQube project key
const sonarqubeApiUrl = `${sonarqubeBaseUrl}/api/issues/search?componentKeys=${encodeURIComponent(
  projectKey
)}&types=SECURITY_HOTSPOT`;
const sonarqubeAuthToken = "sqa_fc381828ca508853fa3fd344874d74b6455eb2dd"; // Replace with your SonarQube auth token
const excelFilename = "security_hotspots.xlsx";

fetchSecurityHotspots(sonarqubeApiUrl, sonarqubeAuthToken)
  .then((issues) => {
    const excelData = convertToExcel(issues);
    downloadExcelFile(excelData, excelFilename);
    console.log(`Excel file "${excelFilename}" downloaded successfully.`);
  })
  .catch((err) => {
    console.error("Error what:", err);
  });
