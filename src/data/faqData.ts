/**
 * Long-tail FAQ content.
 *
 * This is the single source of truth for the FAQ section. The same questions and
 * answers are mirrored into the FAQPage JSON-LD structured data in index.html so
 * that the visible content and the structured data can never drift apart.
 *
 * Why this matters for ranking: Google surfaces these long-tail questions in
 * "People also ask" results, and the phrasing here deliberately targets the
 * natural search patterns recruiters and peers use for this name.
 */

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: 'faq-who',
    question: 'Who is Lourdu Vasantha Polishetti?',
    answer:
      'Lourdu Vasantha Polishetti is a Data Analyst based in Hyderabad, Telangana, India. He builds interactive business intelligence dashboards and reports using Microsoft Power BI, SQL and MySQL, Tableau, and Advanced Excel, backed by three years in pharmaceutical quality control at Dr. Reddy\'s Laboratories and a completed Data Analyst internship at Aivariant.'
  },
  {
    id: 'faq-skills',
    question: 'What are the technical skills of Lourdu Vasantha Polishetti?',
    answer:
      'His core skills are Microsoft Power BI with DAX and star-schema data modelling, SQL and MySQL including joins, CTEs and window functions, Tableau dashboards, Advanced Excel with Pivot Tables and Power Query, ETL and data cleaning, dashboard design and data visualisation, statistical data analysis, Python with pandas and NumPy, and R programming.'
  },
  {
    id: 'faq-availability',
    question: 'Is Lourdu Vasantha Polishetti open to work?',
    answer:
      'Yes. He is open to work as an immediate joiner with zero notice period, and is actively looking for Data Analyst, Business Intelligence, and Reporting roles. He can be reached directly by email at plvasantha1990@gmail.com or by phone on +91 93466 35987.'
  },
  {
    id: 'faq-projects',
    question: 'What analytics projects has Lourdu Vasantha Polishetti built?',
    answer:
      'Five shipped dashboards are documented on this site: a Financial Analysis Power BI dashboard tracking 118.73M in sales and 16.89M profit, a Debit and Credit Power BI dashboard modelling 100,000 banking transactions, a Banking Loan Performance dashboard in Excel covering 1,000 client loans, a Superstore sales dashboard in Tableau, and a Financial Analysis dashboard using DAX measures. Screenshots, insights, and tool stacks are published for each one.'
  },
  {
    id: 'faq-certifications',
    question: 'Is Lourdu Vasantha Polishetti certified as a Data Analyst?',
    answer:
      'Yes. He holds a NASSCOM Data Analyst Certificate with a Silver Badge issued by the IT-ITeS Sector Skill Council (credential FSP/2026/7/10326662), an ExcelR Certificate of Excellence for the Data Analyst programme (credential 35284/EXCELR/05062026), and an Aivariant Data Analyst Internship certificate (code AIV/25-26/Q3/07/19670). All three credential scans are published on this site.'
  },
  {
    id: 'faq-education',
    question: 'What is the educational background of Lourdu Vasantha Polishetti?',
    answer:
      'He holds a Master\'s degree in Organic Chemistry from Osmania University with a CGPA of 7.91, earned a B.Sc. in Mathematics, Physics and Chemistry from St. Pious X Degree and PG College for Women with a CGPA of 9.89, completed Intermediate MPC with 984 out of 1000, and finished SSC with a CGPA of 9.7.'
  },
  {
    id: 'faq-experience',
    question: 'Where has Lourdu Vasantha Polishetti worked?',
    answer:
      'Most recently he worked as a Data Analyst Intern at Aivariant in Hyderabad from April to July 2026. Before that he spent three years and three months as a Quality Control Analyst at Dr. Reddy\'s Laboratories in Bachupally, handling Labware LIMS raw material analysis, OOS and OOT investigations, and GMP, GLP and ICH documentation. He also worked as a Project Trainee in Analytical R&D at Aragen Life Sciences in 2021.'
  },
  {
    id: 'faq-contact',
    question: 'How can I contact Lourdu Vasantha Polishetti for a Data Analyst role?',
    answer:
      'You can reach him by email at plvasantha1990@gmail.com, by phone or WhatsApp on +91 93466 35987, through his LinkedIn profile at linkedin.com/in/lourdu-vasantha-polishetti, or through the contact form on this portfolio. He typically responds within one working day.'
  }
];