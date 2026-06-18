import "./Toolbar.css";

function Toolbar({
  resumeStyle,
  setResumeStyle,
}) {
  const handleStyleChange = (
    field,
    value
  ) => {
    setResumeStyle((prev) => ({
      ...prev,

      [field]: value,
    }));
  };

  return (
    <div className="toolbar">

      <h3>Customize</h3>

      <select
        value={resumeStyle.fontFamily}
        onChange={(e) =>
          handleStyleChange(
            "fontFamily",

            e.target.value
          )
        }
      >
        <option>Inter</option>

        <option>Arial</option>

        <option>Poppins</option>

        <option>Roboto</option>

        <option>Times New Roman</option>
      </select>

      <select
        value={resumeStyle.fontSize}
        onChange={(e) =>
          handleStyleChange(
            "fontSize",

            e.target.value
          )
        }
      >
        <option value="14px">
          Small
        </option>

        <option value="16px">
          Medium
        </option>

        <option value="18px">
          Large
        </option>
      </select>

      <input
        type="color"
        value={resumeStyle.color}
        onChange={(e) =>
          handleStyleChange(
            "color",

            e.target.value
          )
        }
      />

      <button
        type="button"
        onClick={() =>
          handleStyleChange(
            "bold",

            !resumeStyle.bold
          )
        }
      >
        B
      </button>

      <button
        type="button"
        onClick={() =>
          handleStyleChange(
            "italic",

            !resumeStyle.italic
          )
        }
      >
        I
      </button>

      <button
        type="button"
        onClick={() =>
          handleStyleChange(
            "theme",

            resumeStyle.theme === "light"
              ? "dark"
              : "light"
          )
        }
      >
        Theme
      </button>

    </div>
  );
}

export default Toolbar;