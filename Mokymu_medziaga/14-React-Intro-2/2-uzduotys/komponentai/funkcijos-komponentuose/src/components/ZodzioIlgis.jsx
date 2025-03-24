const ZodzioIgis = () => {
  const IlgasZodis = "prisikiškiakopusteliauti";
  const zodzioIlgis = (zodis) => {
    return zodis.length;
  };
  return (
    <>
      Zodzio ilgis
      <p>Ilgasis žodis: {IlgasZodis}</p>
      <p> Ilgajį žodį sudaro {zodzioIlgis(IlgasZodis)} raidės </p>
    </>
  );
};

export default ZodzioIgis;
