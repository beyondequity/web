"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  getCompaniesBySector: () => getCompaniesBySector,
  getCompaniesByStage: () => getCompaniesByStage,
  getPortfolioCompany: () => getPortfolioCompany,
  getPortfolioSummary: () => getPortfolioSummary,
  portfolioCompanies: () => portfolioCompanies
});
module.exports = __toCommonJS(index_exports);

// src/data.ts
var portfolioCompanies = [
  {
    id: "sandboxaq",
    name: "SandboxAQ",
    description: "Enterprise SaaS company delivering solutions at the nexus of AI and Quantum technology (LQM). Partnerships with Saudi Aramco, Sanofi, and US Army.",
    logo: "/portfolio-images/sandboxaq-logo.svg",
    website: "https://www.sandboxaq.com",
    sector: "ai",
    stage: "series-b",
    investmentDate: "2022-01-01",
    status: "active",
    metrics: {
      fundingRounds: [
        {
          round: "Series B",
          amount: 74e7,
          date: "2023-02-01",
          leadInvestors: ["Various leading investors"]
        }
      ]
    }
  },
  {
    id: "xai",
    name: "X.AI",
    description: "Elon Musk's AI company building Grok, an AI assistant with real-time access to information. Valued at $50 billion.",
    logo: "/portfolio-images/xai-logo.svg",
    website: "https://x.ai",
    sector: "ai",
    stage: "growth",
    investmentDate: "2023-01-01",
    currentValuation: 5e10,
    status: "active"
  },
  {
    id: "spacex",
    name: "SpaceX",
    description: "Leading aerospace manufacturer and space transportation company. Valuation surged to $350 billion through stock buyback program.",
    logo: "/portfolio-images/spacex-logo.svg",
    website: "https://www.spacex.com",
    sector: "space",
    stage: "late-stage",
    investmentDate: "2002-01-01",
    currentValuation: 35e10,
    status: "active"
  },
  {
    id: "palantir",
    name: "Palantir Technologies",
    description: "Public software company specializing in big data analytics for government and commercial clients. Known for AI Platform (AIP).",
    logo: "/portfolio-images/palantir-logo.svg",
    website: "https://www.palantir.com",
    sector: "ai",
    stage: "late-stage",
    investmentDate: "2003-01-01",
    status: "active"
  },
  {
    id: "axispoint",
    name: "AxisPoint",
    description: "Technology company focused on advanced solutions.",
    logo: "/portfolio-images/axispoint-logo.svg",
    sector: "ai",
    stage: "growth",
    investmentDate: "2020-01-01",
    status: "active"
  }
];
function getPortfolioCompany(id) {
  return portfolioCompanies.find((company) => company.id === id);
}
function getCompaniesBySector(sector) {
  return portfolioCompanies.filter((company) => company.sector === sector);
}
function getCompaniesByStage(stage) {
  return portfolioCompanies.filter((company) => company.stage === stage);
}
function getPortfolioSummary() {
  const totalCompanies = portfolioCompanies.length;
  const activeCompanies = portfolioCompanies.filter((c) => c.status === "active").length;
  const totalValue = portfolioCompanies.reduce((sum, company) => {
    return sum + (company.currentValuation || 0);
  }, 0);
  const sectorDistribution = portfolioCompanies.reduce((acc, company) => {
    acc[company.sector] = (acc[company.sector] || 0) + 1;
    return acc;
  }, {});
  const stageDistribution = portfolioCompanies.reduce((acc, company) => {
    acc[company.stage] = (acc[company.stage] || 0) + 1;
    return acc;
  }, {});
  return {
    totalCompanies,
    activeCompanies,
    totalValue,
    sectorDistribution,
    stageDistribution
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getCompaniesBySector,
  getCompaniesByStage,
  getPortfolioCompany,
  getPortfolioSummary,
  portfolioCompanies
});
