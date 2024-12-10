export const CategoryLabel = ({ text }) => {
  const [firstPart, secondPart] = text.split("&");
  return secondPart ? (
    <>
      {firstPart.trim()} & <br />
      {secondPart.trim()}
    </>
  ) : (
    text
  );
};
