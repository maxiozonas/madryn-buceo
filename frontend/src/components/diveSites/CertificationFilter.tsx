interface CertificationFilterProps {
  certificationFilter: string | null;
  setCertificationFilter: (filter: string | null) => void;
}

const CertificationFilter: React.FC<CertificationFilterProps> = ({
  certificationFilter,
  setCertificationFilter,
}) => {
  return (
    <div className="absolute top-57 left-20 md:top-49 md:left-49  z-[1000] bg-[#252422] text-red-500 rounded px-3 py-2 shadow-md z-10">
      <label className="mr-2 font-semibold">Certificación:</label>
      <select
        value={certificationFilter || ""}
        onChange={(e) => setCertificationFilter(e.target.value || null)}
        className="bg-[#252422] border border-red-500 rounded px-2 py-1"
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
