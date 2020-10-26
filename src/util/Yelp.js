const apiKey =
  "ApuIQcN6UeFxEWjZUw6q0ZD0sKtS1Gn71wYyJas9pVUq7h2-MX7H_W1WTy6ipaS1Vx2Z8zLpG739G7xEYJBsfUn4HiPQZu2T-2_hB-XSb2qsvhNKCgRarUSAieGVX3Yx";

const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        }
      });
  },
};

export default Yelp;
