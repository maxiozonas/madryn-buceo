interface CourseDescriptionProps {
    description: string;
    learningOutcomes?: string[];
    includes?: string[];
    qualifications?: string[];
}

export default function CourseDescription({ description, learningOutcomes, includes, qualifications }: CourseDescriptionProps) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 px-6 text-white">Descripción del curso</h2>
            <p className="text-lg mb-6 px-6 text-white/80">{description}</p>
            {learningOutcomes && learningOutcomes.length > 0 && (
                <>
                    <h2 className="text-2xl font-bold mb-4 px-6 text-white">¿Qué aprenderás?</h2>
                    <ul className="list-disc text-white/80 pl-6 mb-6">
                        {learningOutcomes.map((outcome, index) => (
                            <li key={index}>{outcome}</li>
                        ))}
                    </ul>
                </>
            )}
            {includes && includes.length > 0 && (
                <>
                    <h2 className="text-2xl font-bold mb-4 px-6 text-white">¿Qué incluye?</h2>
                    <ul className="list-disc text-white/80 pl-6 mb-6">
                        {includes.map((include, index) => (
                            <li key={index}>{include}</li>
                        ))}
                    </ul>
                </>
            )}
            {qualifications && qualifications.length > 0 && (
                <>
                    <h2 className="text-2xl font-bold mb-4 px-6 text-white">Los PADI Scuba Divers están calificados para:</h2>
                    <ul className="list-disc text-white/80 pl-6 mb-6">
                        {qualifications.map((qualification, index) => (
                            <li key={index}>{qualification}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}