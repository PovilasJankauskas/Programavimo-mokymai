import "./SassStyling.scss";

const SassStyling = () => {
  return (
    <div>
      <h3> Sass Styling</h3>

      <div id="sassContainer">
        <h4> Mano sass bandymas</h4>
        <p className="sassLoremText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          porro delectus. Odit eos cupiditate doloremque harum distinctio
          provident quibusdam delectus corrupti! Earum sunt iure possimus ipsum
          distinctio sint nobis numquam?
        </p>
        <button className="btn-click"> Click me</button>
      </div>
      <div className="sassLinks">
        <ul>
          <li>
            <a>pvz</a>
          </li>
          <li>
            <a>example</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SassStyling;
