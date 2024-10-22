// import { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SkeletonImage from '../../components/skeletonImage/SkeletonImage';
import { IMovie } from '../../interfaces/movie.interface';
import styles from './MoviePage.module.css';

export default function MoviePage() {
    const data = useLoaderData() as { data: IMovie };

    console.log(data.data.short);

    return (

        <section>
            <h2 className="visually-hidden">Страница фильма</h2>
            <div className={styles["movie-page-container"]}>
                <header className={styles["movie-page-header"]}>
                    <Link className={styles["movie-page-link"]} to={'/'}>Поиск фильмов</Link>
                    <p>{`data: ${data.data?.short?.name}`}</p>
                </header>

                <div className={styles["movie-page-wrapper"]}>
                    <div className={styles["movie-page-image-box"]}>
                        {data.data.short?.image !== 'undefined' ? (
                            <SkeletonImage />
                        ) : (
                            <img src={'dfldgfjldgjds'} width={300} height={450} alt="Some alt" />
                        )}
                    </div>
                    <div className={styles["movie-page-text-box"]}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae deleniti, incidunt laborum ex repellendus dolores officia debitis? Vero, facere iste cum tempora, repellat amet, fugit ratione voluptatem beatae repudiandae rem. Veniam tempora suscipit quidem recusandae nobis voluptatibus sit est eaque minima necessitatibus ea impedit, dolor quibusdam nulla at aperiam inventore animi sint soluta placeat hic iusto? Qui ipsa optio dolores ex veritatis harum illum ullam, ab, dolor non modi quibusdam velit? Nulla, quae tenetur dignissimos soluta, error dolore ea blanditiis adipisci sit praesentium, unde fuga autem. Tempore rerum ipsa eos accusantium quasi nam voluptas magnam sed aut suscipit quod repudiandae similique nulla, dolorum cum numquam qui ipsum eaque odit est consequuntur consectetur nesciunt. Debitis aliquam, rerum tempora ipsam error laudantium reiciendis accusantium unde itaque cupiditate possimus voluptates sit ex inventore nihil porro at facilis obcaecati et numquam voluptatibus eligendi ab quod? Corporis, labore. Molestias voluptatibus nulla voluptates odit, explicabo voluptas hic ipsa qui, saepe fuga quisquam iste nobis. Cumque saepe repellendus eos nesciunt, ratione, quas similique corrupti molestiae consequatur numquam consectetur deserunt animi reprehenderit fugiat impedit eligendi? Quibusdam deserunt incidunt perspiciatis. Quod corrupti molestias deleniti, voluptatum dolorum eos quibusdam mollitia inventore tenetur aliquid facere, nisi ab quos esse. Facilis necessitatibus ratione itaque accusamus nisi vel nulla quo aut dolorem impedit reiciendis sequi non sit optio aperiam temporibus aliquam totam, aliquid eligendi omnis minima? Odit et reiciendis tempora. Quidem omnis minima delectus ut repellendus. Dignissimos, enim harum quis delectus odit omnis veniam sapiente possimus aperiam! Error praesentium dolore provident iusto non deleniti cupiditate dolor officia eum quibusdam aliquam sint nulla earum accusamus, repudiandae, tenetur ad dolorum voluptatem velit officiis optio itaque! Obcaecati repudiandae non temporibus nemo sapiente numquam veritatis, et saepe? Similique, cum mollitia excepturi quasi id ducimus amet asperiores tempora neque sunt voluptatum laudantium reprehenderit doloremque libero adipisci praesentium officiis obcaecati commodi unde vitae repellendus facere? Tempore, ullam deleniti ab repellat odit culpa eaque pariatur. Fugiat eligendi quam eaque rem necessitatibus repellat quod nisi, harum veritatis alias quasi error aliquam accusantium nihil dolore, voluptates beatae odio. Sed pariatur similique tenetur libero hic minus eaque ipsum.
                    </div>
                </div>
            </div>
        </section>
    )
}
