interface CertificationFilterProps {
  certificationFilter: string | null;
  setCertificationFilter: (filter: string | null) => void;
}

const CertificationFilter: React.FC<CertificationFilterProps> = ({
  certificationFilter,
  setCertificationFilter,
}) => {
  return (
    <div className="bg-negro text-rojo border-[#403d39] rounded px-4 py-3 sm:px-3 sm:py-2 shadow-md flex items-center">
      <label className="mr-1 sm:mr-2 font-semibold text-sm sm:text-sm">Certificación:</label>
      <select
        value={certificationFilter || ""}
        onChange={(e) => setCertificationFilter(e.target.value || null)}
        className="bg-negro border border-rojo rounded px-2 py-1 sm:px-2 sm:py-1 text-sm sm:text-sm"
      >
        <option value="" style={{ color: "#e12222" }}>
          Todas
        </option>
        <option value="OWD">Open Water</option>
        <option value="ADV">Advanced</option>
        <option value="Rescue">Rescue</option>
        <option value="Divemaster">Divemaster</option>
        <option value="Scuba Diver">Scuba Diver</option>
      </select>
    </div>
  );
};

export default CertificationFilter;