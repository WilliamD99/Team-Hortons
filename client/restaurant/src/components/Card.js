import React from "react";
import "bulma/css/bulma.css";

export default function Card() {
  console.log(restaurantArray);
  const listOfRestaurants = restaurantArray.map((listItems, index) => {
    console.log(listItems);

    const itemsObject = restaurantArray[index].items.map(
      (objectsList, index) => {
        console.log(objectsList.name);
        //map through categories here
        return (
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                ></img>
              </figure>
            </div>

            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder image"
                    ></img>
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">{objectsList.name}</p>
                  <p className="subtitle is-6">@johnsmith</p>
                </div>
              </div>
            </div>

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris. <a>@bulmaio</a>.
            </div>
          </div>
        );
      }
    );

    return itemsObject;
  });

  return (
    <section className="card__list">
      <div className="card__item">{listOfRestaurants}</div>
    </section>
  );
}
