/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import Link from "next/link";

interface Props {
    children: any;
    title: string;
    image: string;
    link: string;
    className?: string;
}

const Card = (props: Props) => {
    let image = props.image.includes("?")
        ? `${props.image}&=h${Math.random()}`
        : `${props.image}?h=${Math.random()}`;

    return (
        <div
            className={
                "card mb-4 flex justify-center items-center max-w-full rounded-xl md:h-80"
            }
            style={{ backgroundColor: "#242526" }}
        >
            <div className="grid p-5 grid-cols-1 md:grid-cols-2 md:grid-rows-1 grid-rows-2 h-full">
                <div className="image">
                    <Link href={props.link}>
                        <a
                            className="no-underline h-full pt-4 md:pt-0 bg-top md:h-full w-full rounded-md block bg-cover"
                            style={{
                                backgroundImage: `url(${image}?date=${Math.random()})`,
                            }}
                        ></a>
                    </Link>
                </div>
                <div className="text md:pl-5 mt-4 md:mt-0 flex flex-col justify-between">
                    <div className="about">
                        <h1
                            className="text-4xl font-bold pb-2"
                            style={{ color: "#e4e6eb" }}
                        >
                            <Link href={props.link}>
                                <a className="no-underline">{props.title}</a>
                            </Link>
                        </h1>
                        <hr />
                        <p
                            style={{ color: "#e4e6eb" }}
                            className="pt-2 leading-6"
                        >
                            {props.children}
                        </p>
                    </div>
                    <div className="buttons flex flex-col justify-end items-center w-full mt-4 md:mt-0">
                        <Link href={props.link}>
                            <a
                                style={{ backgroundColor: "#466e9c" }}
                                className="py-2 px-8 rounded-md text-gray-100 no-underline flex items-center justify-center w-full"
                            >
                                Follow
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
