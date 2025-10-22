/**
 * @beyondequity/portfolio
 * Shared portfolio data and utilities for the Beyond Alpha ecosystem
 */

// Export all data and utilities
export * from './data';

// Re-export relevant types from @beyondequity/types for convenience
export type { 
  PortfolioCompany,
  PortfolioMetrics,
  PortfolioUpdate,
  InvestmentSector,
  InvestmentStage,
  PortfolioSummary
} from '@beyondequity/types';
