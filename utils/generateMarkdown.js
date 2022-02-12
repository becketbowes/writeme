const year = new Date();
year.getFullYear();
const licenseArrs = {
  ccAttribution: ['cc-by.png', 'https://creativecommons.org/licenses/by/4.0/legalcode', `Creative Commons Attribution License${year}`],
  ccAttributionShareAlike: ['cc-by-sa.png', 'https://creativecommons.org/licenses/by-sa/4.0/legalcode', `Creative Commons Attribution Share-Alike License${year}`],
  ccAttributonNonCommercial: [']cc-by-nc.png', 'https://creativecommons.org/licenses/by-nc/4.0/legalcode', `Creative Commons Attribution Non-Commercial License${year}`],
  ccAttriubutionNonCommercialShareAlike: ['cc-by-nc-sa.png', 'https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode', `Creative Commons Attribution Non-Commercial Share-Alike License${year}`], 
  mit: ['mit.svg.png', 'https://opensource.org/licenses/MIT', `MIT Open License, ${year}`],
  copyLeft: ['gnu-gpl-logo.png', 'https://www.gnu.org/licenses/gpl-3.0.html', `Gnu CopyLeft License, ${year}`],
  copyright: ['copyrightSymbol.png', 'https://en.wikipedia.org/wiki/Copyright',
  `Copyright (C) codeclast - All Rights Reserved. 
  Unauthorized copying of this file, via any medium is strictly prohibited. 
  Proprietary and confidential. 
  Written by codeclast ${year}.`
  ],
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicense(license) {
  if (license) {
    licenseBadge = licenseArrs.license[0];
    licenseLink = licenseArrs.license[1];
    licenseType = licenseArrs.license[2];
  } else {
    licenseBadge = "";
    licenseLink = "";
    licenseType = "";
  };
};

function tableOfContents(installation, usage, credits, tests, author) {
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('in generate Markdown function', data);
  return `# ${data.title + ' '  + data.version + licenseBadge}

  ## OVERVIEW:
   ${data.description + '. ' + data.motivation + '. ' + data.function + '. ' + data.education + '.'}

  <img src="./assets/img/readme/${data.imageone}" />
  <img src="./assets/img/readme/${data.imagetwo}" />
  <img src="./assets/img/readme/${data.imagethree}" />

  ## TABLE OF CONTENTS:
  Installation(#Installation)
  Usage(#Usage)
  Tests(#Tests)
  Credits(#Credits)
  Author(#Author)
  License(#License)

  ### Installation
  ${data.installation}

  ### Usage
  ${data.usage}

  ### Tests
  ${data.tests}

  ### Credits
  ${data.credits}

  ### Author(s)
  ${data.author}
  Github Page(http://www.github.com/${data.github})

  ### License
  ${LicenseType}(${LicenseLink})
`;
}

module.exports = generateMarkdown;
