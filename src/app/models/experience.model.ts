export interface Icon {
  key?: number;
  icon?: React.ReactNode;
  title?: string;
}

export interface Experience {
  key?: number;
  title?: string;
  description?: string;
  icons?: Icon[];
}

export interface ExperienceTemplateProps {
  title?: string;
  experiences?: Experience[];
  size?: string;
}
