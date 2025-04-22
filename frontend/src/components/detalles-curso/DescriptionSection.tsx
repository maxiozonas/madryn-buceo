interface DescripcionSectionProps {
  description: string;
}

export default function DescripcionSection({ description }: DescripcionSectionProps) {
  return (
    <div className="bg-negro-secundario rounded-xl overflow-hidden shadow-lg border border-[#403d39] p-2 mb-12">
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4 text-white flex items-center uppercase font-oceanica text-center">
          Descripción de la Experiencia
        </h2>
        <p className="text-white/80 leading-relaxed mb-2">{description}</p>
        {/* {slug === 'bautismo-buceo' && (
          <div className="my-4 text-center">
            <Link href="/cursos/padi/discover-scuba-diving">
              <ButtonRojo texto="Ir a Discover Scuba Diving" />
            </Link>
          </div>
        )} */}
      </div>
      {/* <div className="relative h-[300px]">
        <Image
          src={cardImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105 rounded-xl"
        />
      </div> */}
    </div>
  );
}