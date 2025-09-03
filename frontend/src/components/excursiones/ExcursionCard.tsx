"use client";

import { Card } from "../ui/card";
import Link from "next/link";
import { CardContent } from "../ui/card";
import ButtonRojo from "../ui/button-rojo";
import { useRouter } from "next/navigation";
import { FormattedMessage } from "react-intl";
import Image from "next/image";

export default function ExcursionCard({
  title,
  description,
  image,
  link,
  bg,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
  bg?: boolean;
}) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(link);
  };

  return (
    <div
      className={
        bg
          ? "group relative bg-negro overflow-hidden shadow-md h-full flex flex-col"
          : "group relative bg-negro-secundario overflow-hidden shadow-md h-full flex flex-col"
      }
    >
      <Card
        className={
          bg
            ? "overflow-hidden p-0 border-none rounded-none shadow-md bg-negro transition-shadow h-full"
            : "overflow-hidden p-0 border-none rounded-none shadow-md bg-negro-secundario transition-shadow h-full"
        }
      >
        <Link
          href={link}
          className="h-full flex flex-col"
          onClick={handleClick}
        >
          <div className="relative overflow-hidden h-64">
            <div className="w-full h-full rounded-none">
              <Image
                src={image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover rounded-none transition-transform duration-500 group-hover:scale-110"
                width={500}
                height={500}
              />

              <span className="sr-only">
                <FormattedMessage id={`${title}`} />
              </span>
            </div>
          </div>
          <CardContent
            className={
              bg
                ? "flex flex-col items-center text-center text-white relative p-6 flex-grow justify-between"
                : "flex flex-col items-center text-center text-white relative p-6 flex-grow justify-between"
            }
          >
            <h3 className="text-xl font-bold mt-2 mb-3 text-white group-hover:text-[#e12222] transition-colors">
              <FormattedMessage id={title} />
            </h3>
            <div className={bg ? "flex-grow mb-6" : "flex-grow mb-6"}>
              <p className="text-gray-300 line-clamp-3">
                <FormattedMessage id={description} />
              </p>
            </div>
            <div className={bg ? "mt-auto w-full" : "mt-auto w-full"}>
              <ButtonRojo
                texto={<FormattedMessage id="excursionCard.button.moreInfo" />}
                fullWidth={true}
                href={link}
              />
            </div>
          </CardContent>
        </Link>
      </Card>
    </div>
  );
}
