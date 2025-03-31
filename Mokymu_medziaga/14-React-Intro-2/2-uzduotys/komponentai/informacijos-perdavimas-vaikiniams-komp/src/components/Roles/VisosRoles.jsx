import Role from "./Role";
const VisosRoles = () => {
  const roles = [
    { pavadinimas: "Administratorius", kiekis: 5 },
    { pavadinimas: "Moderatorius", kiekis: 10 },
    { pavadinimas: "Vartotojas", kiekis: 50 },
  ];
  return (
    <div>
      <h1>Visos Roles</h1>
      {roles.map((role, i) => (
        <Role key={i} pavadinimas={role.pavadinimas} kiekis={role.kiekis} />
      ))}
    </div>
  );
};
export default VisosRoles;
