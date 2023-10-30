// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ((license = "MIT")) {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  }
  if ((license = "Mozilla")) {
    return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
  }
  if ((license = "Unlicense")) {
    return "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
  }
  if ((license = "WTFPL")) {
    return "![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)";
  }
  if ((license = "None")) {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ((license = "MIT")) {
    return "https://opensource.org/licenses/ISC";
  }
  if ((license = "Mozilla")) {
    return "https://opensource.org/licenses/MPL-2.0";
  }
  if ((license = "Unlicense")) {
    return "http://unlicense.org/";
  }
  if ((license = "WTFPL")) {
    return "http://www.wtfpl.net/about/";
  }
  if ((license = "None")) {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
async function renderLicenseSection(license) {
  const badge = await renderLicenseBadge(license);
  const link = await renderLicenseLink(license);
  const section = badge + " " + link;
  return section;
}

// TODO: Create a function to generate markdown for README
async function generateMarkdown(data) {
  console.log(data);
  const licensesect = await renderLicenseSection(data.License);
  const markdown = `# ${data.Name}
  # Description
  ${data.Description}
  # Usage
  ${data.Usage}
  # Contact Us
  ${data.Contributing}
  # Test
  ${data.Test}
  # License
  ${licensesect}`;
  return markdown;
}

module.exports = generateMarkdown;
