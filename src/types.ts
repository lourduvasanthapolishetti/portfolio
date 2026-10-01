export interface SkillItem {
  id: string;
  code: string;
  title: string;
  category: 'core' | 'bi' | 'data' | 'domain';
  description: string;
  proficiency: number; // 1-100
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  yearShort: string;
  dateRange: string;
  /** Human-readable length of the role, e.g. '3 yrs 3 mos'. */
  duration?: string;
  role: string;
  organization: string;
  employmentType?: string;
  /** Drives the badge colour/label on the card. */
  category: 'analytics' | 'upskilling' | 'pharma';
  /** e.g. 'On-site' / 'Remote'. */
  workMode?: string;
  location?: string;
  /** Optional one-paragraph role summary shown above the highlights. */
  summary?: string;
  highlights: string[];
  techStack: string[];
  /** Optional certificate issued for this role. */
  certificate?: {
    title: string;
    credentialId: string;
    issuedOn: string;
    image: string;
    imageAlt: string;
  };
}

export interface ProjectItem {
  id: string;
  title: string;
  /** e.g. 'Sales & Profit Trends' — shown under the title. */
  subtitle: string;
  /** Project timeline exactly as published, e.g. 'May 2026 – Present'. */
  projectDate: string;
  stack: string[];
  /** Full skill list for the project, used by the modal and one-pager. */
  skills: string[];
  summary: string;
  highlightMetric: string;
  liveUrl?: string;
  /** Screenshot path placed in /public/projects (e.g. '/projects/banking-loan.png'). */
  image?: string;
  /** Short alt text describing the screenshot for accessibility. */
  imageAlt?: string;
  visualType: 'loan' | 'transaction' | 'superstore' | 'financial';
  problemStatement: string;
  solution: string;
  keyInsights: string[];
  datasetSize: string;
  toolsUsed: string[];
  sqlSnippet?: string;
  daxSnippet?: string;
  metrics: { label: string; value: string }[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  /** e.g. 'Expired Jul 2026' for time-bound credentials. */
  expiry?: string;
  credentialId: string;
  /** Short summary of what the certificate attests to. */
  description?: string;
  skills?: string[];
  /** Scan of the certificate in /public/certificates. */
  image?: string;
  imageAlt?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  cgpa: string;
  period: string;
  /** Awards, societies and academic activities from LinkedIn. */
  activities?: string[];
}
