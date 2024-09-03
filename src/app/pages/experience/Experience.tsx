import { useTranslations } from "next-intl";

export default function Experience() {
  const t = useTranslations("homepage");

  return (
    <div className="h-full pl-6 pr-6 md:ml-20 md:mr-20 grid grid-cols-1 md:grid-cols-3">
      <div className="border md:mt-20 ">Test 1</div>
      <div className="border md:mt-20">Test 2</div>
      <div className="border md:mt-20">Test 3</div>
    </div>
  );
}
