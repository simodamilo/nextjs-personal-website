interface Experience {
  title?: string;
  description?: string;
  icons?: React.ReactNode[];
}

export interface ExperienceTemplateProps {
  title?: string;
  experiences?: Experience[];
  size?: string;
}
