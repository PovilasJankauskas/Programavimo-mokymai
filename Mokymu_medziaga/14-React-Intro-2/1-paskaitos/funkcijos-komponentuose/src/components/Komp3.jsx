import { avarageArray } from "../utils/calculator"; // importuojamas kodas iš utilities, kad nereikėtų rašyti to pačio kodo kiekviename komponente (kaip parašyta vidurkio skaičiavimas Komp2 pvz). Jį tiesiog importuojame

const Komp3 = () => {
  let studentai = [
    { id: 1, name: "Jonas", grades: [4, 8, 7, 9] },
    { id: 2, name: "Petras", grades: [5, 10, 7, 9] },
    { id: 3, name: "Ieva", grades: [4, 8, 6, 5] },
    { id: 4, name: "Povka", grades: [4, 4, 5, 5] },
  ];

  let minGoodGradeValue = 5;
  /* pradinukų ir dažnai naudojamas kodas apskaičiuoti ar vidurkis teigiamas
  const arTeigiamas = (grade) => {
    if (grade >= 5 ) {
    return "Taip";
    } else {
    return "Ne";
  }
  }; */
  return (
    <div>
      Studentai
      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>grades avg</th>
            <th>is Good?</th>
          </tr>
        </thead>
        <tbody>
          {studentai.map((studentas) => {
            return (
              <tr key={studentas.id}>
                <td>{studentas.id}</td>
                <td>{studentas.name}</td>
                <td>{avarageArray(studentas.grades)}</td>
                {/*naudojamas kodas aprašytas ir importuotas iš utilities, o duomenys is studentai masyvo*/}
                <td>
                  {avarageArray(studentas.grades) >= minGoodGradeValue
                    ? "taip"
                    : "ne"}
                  {/* paprastesnės funkcijos rezultato išvedimas {arTeigiamas(studentas.grades)} iš 12-19 eilučių */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Komp3;
