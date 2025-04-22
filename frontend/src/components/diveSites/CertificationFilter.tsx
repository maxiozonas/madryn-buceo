interface CertificationFilterProps {
  certificationFilter: string | null;
  setCertificationFilter: (filter: string | null) => void;
}

const CertificationFilter: React.FC<CertificationFilterProps> = ({
  certificationFilter,
  setCertificationFilter,
}) => {
  return (
    <div className="absolute top-4 left-15 z-[100] bg-white text-black rounded px-3 py-2 shadow-md">
      <label className="mr-2 font-semibold">Certificación:</label>
      <select
        value={certificationFilter || ""}
        onChange={(e) => setCertificationFilter(e.target.value || null)}
        className="bg-white border border-gray-300 rounded px-2 py-1"
      >
        <option value="">Todas</option>
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
