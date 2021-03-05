'use strict';
// routing https://www.pluralsight.com/guides/using-react-router-with-cdn-links
// import FilterList from "./FilterList.js";
// import RestaurantList from "./RestaurantList.js";


// const e = React.createElement;

function Restaurant(name, tags, pic) {
  this.name = name;
  this.tags = tags;
  this.pic = pic;
}

class RestaurantPicker extends React.Component {
  filterOptions = [
    {"Ethnicity": ["Mexican", "Chinese", "Indian", "Japanese", "Italian"]},
    {"Drinks/Snacks": ["Bar", "Alcohol", "Cafe", "Pastries", "Ice Cream"]},
    {"Other": ["24/7", "Sushi", "Sit Down", "Dine In", "Fast Food", "Drive Thru", "Locally Owned", "Pizza", "Diner"]}
  ];
  restarauntOptions = [
    new Restaurant("Kneaders", ["Take Out", "Drive Thru", "Cafe", "Pastries", "Sit Down"], "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.orovalleyaz.gov%2Ffiles%2Fassets%2Fpublic%2Fimages-depts%2Fced%2Feconomic-development%2Fkneaders-logo.png%3Fw%3D1200&f=1&nofb=1", "1400 n, 200 west logan, ut"), 
    new Restaurant("Panda Express", ["Chinese", "Sit Down"], "https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Panda_Express_logo.svg/1200px-Panda_Express_logo.svg.png"), 
    new Restaurant("Wok on Wheels", ["Chinese", "Dine In"], "https://cdn.doordash.com/media/restaurant/cover/Wok_on_Wheels_2_Copy.jpg"),
    new Restaurant("Cafe Sabor", ["Mexican", "Dine In"], "http://cafesabor.com//images/logo2x.png"),
    new Restaurant("McDonalds", ["Fast Food", "24/7", "Drive Thru", "Sit Down"], "https://pbs.twimg.com/profile_images/1334527633992761344/kwlzzLs6_400x400.png"),
    new Restaurant("Kabuki Japanese Steakhouse and Sushi Bar", ["Japanese", "Sushi", "Dine In", "Alcohol"], "https://d2fpz7jqe8v7wt.cloudfront.net/restaurant-logos/60573/original-97eda0a8be9bf1eb7f02adb6e8671335.jpeg?1542735756"),
    new Restaurant("Denny's", ["24/7", "Dine In"], "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Denny%27s_logo.svg/1200px-Denny%27s_logo.svg.png"),
    new Restaurant("Ihop", ["24/7", "Dine In"], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/IHOP_logo.svg/1200px-IHOP_logo.svg.png"),
    new Restaurant("Formosa Restaurant", ["Dine In"], "https://ehc-west-0-bucket.s3.us-west-2.amazonaws.com/web/documents/formosalogan/promo_5c62b3b50e84b.png"),
    new Restaurant("El Sol Mexican Restaurant", ["Mexican", "Dine In"], "https://cdn.doordash.com/media/restaurant/cover/ElSolMexicanRestaurantRaritanAve304HighlandParkNJ.png"),
    new Restaurant("Olive Garden", ["Dine In", "Alcohol", "Italian"], "https://photos.prnewswire.com/prnfull/20160122/325098LOGO"),
    new Restaurant("Angie's", ["Dine In", "Locally Owned", "Ice Cream"], "https://i1.wp.com/www.grubgrade.com/wp-content/uploads/2010/02/Angies-Diner.jpg?resize=500%2C324&ssl=1"),
    new Restaurant("Romo's Mediterranean Grill", ["Dine In", "Dine In"], "https://www.romosgrill.com/wp-content/uploads/2014/04/romos.png"),
    new Restaurant("Buffalo Wild Wings", ["Dine In"], "https://upload.wikimedia.org/wikipedia/en/7/7e/Buffalo_wildwings_logo18.png"),
    new Restaurant("Pizza Pie Cafe", ["Sit Down"], "https://pbs.twimg.com/profile_images/840414491997220864/c5jb96I0_400x400.jpg"),
    new Restaurant("Texas Roadhouse", ["Alcohol", "Dine In"], "https://www.texasroadhouse.com/images/og-image.jpg"),
    new Restaurant("Chili's Grill and Bar", ["Dine In", "Alcohol"], "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Chili%27s_Logo.svg/1200px-Chili%27s_Logo.svg.png"),
    new Restaurant("Mandarin Garden", ["Dine In"], "https://media-cdn.tripadvisor.com/media/photo-s/10/ae/e3/dd/photo1jpg.jpg"),
    new Restaurant("Tandoori Oven", ["Indian", "Dine In", "Alcohol", "Locally Owned"], "https://media-cdn.tripadvisor.com/media/photo-s/04/20/f8/9c/tandoori-oven.jpg"),
    new Restaurant("Juniper Take Out & Restaurant", ["Sit Down"], "https://www.cachevalleysavings.com/wp-content/uploads/2017/10/Juniper-Logo-300x225.jpg"),
    new Restaurant("Jacks Wood-fire Pizza", ["Locally Owned", "Pizza"], "https://static.wixstatic.com/media/eda993_e2a9f82991fe42d58980dd66fd0194c9~mv2_d_3000_1528_s_2.png/v1/fill/w_504,h_256,al_c,q_85,usm_0.66_1.00_0.01/eda993_e2a9f82991fe42d58980dd66fd0194c9~mv2_d_3000_1528_s_2.webp"),
    new Restaurant("Bulls Head", ["Sit Down", "Locally Owned"], "https://d6ozfheqtj1tz.cloudfront.net/ChIJn6c03dN9VIcRb7ZC9L0L1Hc/p4o7BoKdU4.png"),
    new Restaurant("Caffe Ibis", ["Cafe", "Pastries", "Locally Owned"], "https://www.usu.edu/dining/images/in-the-hub/Caffe-Ibis-Logo.png"),
    new Restaurant("Le Nonne", ["Locally Owned", "Dine In"], "https://media-cdn.tripadvisor.com/media/photo-s/04/49/08/f8/le-nonne.jpg"),
    new Restaurant("The Bluebird", ["Dine In", "Locally Owned"], "https://www.thebluebirdrestaurant.com/uploads/b/79f55d9844795a92c867036a54ca0123fcfa211643425018b17ecfb83938e2df/BluebirdRestaurant-Logo%20(1)_1591742052.jpg"),
    new Restaurant("Center Street Grill", ["Sit Down", "Locally Owned"], "https://digitalmarketing.blob.core.windows.net/5712/images/items/image319510.png"),
    new Restaurant("The White Owl", ["Alcohol", "Bar"], "https://i2.wp.com/thecompletesavorist.com/wp-content/uploads/2014/11/white-owl.jpg?resize=604%2C289&ssl=1"),
    new Restaurant("Mo Bettah Steaks", ["Locally Owned", "Sit Down"], "https://www.mobileadreach.com/restaurant_images/logo/1487263716_original.48"),
    new Restaurant("Chuck-a-rama", ["Dine In"], "https://chuck-a-rama.com/wp-content/uploads/2020/10/New-Logo-for-Website.png"),
    new Restaurant("The Beehive Grill", ["Dine In", "Alcohol", "Locally Owned"], "https://thebeehivegrill.com/wp-content/uploads/2018/06/BeehiveLogo.png"),
    new Restaurant("Herm's Inn", ["Diner"], "https://static.wixstatic.com/media/fc741f_376ae295e713468ba083058f03c6f0ff.png/v1/fill/w_292,h_157,al_c,q_85,usm_0.66_1.00_0.01/fc741f_376ae295e713468ba083058f03c6f0ff.webp"),
    new Restaurant("Huhot Mongolian Grill", ["Dine In"], "https://pnicug7ne42wgqzj1vbyjy1a-wpengine.netdna-ssl.com/wp-content/uploads/huhot-fb-default.png"),
    new Restaurant("Firehouse Pizzeria", ["Locally Owned", "Pizza", "Ice Cream"], "https://images.getbento.com/accounts/aaee8b5a0273162923a8199a73974f56/media/images/54670LOGO.png"),
    new Restaurant("La Tormenta", ["Locally Owned", "Mexican", "Sit Down"], "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMK6yFHDIf5mnE6mE9HRQ57FuNQEj8Lxfmw&usqp=CAU"),
    new Restaurant("Noodles and Company", ["Sit Down"], "https://ewscripps.brightspotcdn.com/dims4/default/91610cc/2147483647/strip/true/crop/640x360+0+14/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.thedenverchannel.com%2Fphoto%2F2013%2F06%2F17%2FNoodles_And_Co_1371510983471_430836_ver1.0_640_480.jpg"),
    new Restaurant("Old Grist Mill Bread", ["Sit Down"], "https://media-cdn.tripadvisor.com/media/photo-s/0c/80/a9/2e/entrance.jpg"),
    new Restaurant("Indian Oven", ["Locally Owned", "Indian"], "https://images.happycow.net/venues/1024/58/66/hcmp58662_104466.jpeg"),
    new Restaurant("Jamba Juice", ["Sit Down"], "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/10/jamba-juice-1296x728-header.jpg?w=1155&h=1528"),
    new Restaurant("KFC", ["Drive Thru", "Fast Food", "Sit Down"], "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/2020-09/KFC%20X%20DoorDash%20PR%20Image%202.png?itok=lYdjw8El"),
    new Restaurant("Little Caesars Pizza", ["Fast Food", "Drive Thru", "Pizza"], "https://pbs.twimg.com/profile_images/925726655523385344/fDCkJQ72_400x400.jpg"),
    new Restaurant("Arby's", ["Drive Thru", "Fast Food", "Sit Down"], "https://cds.arbys.com/images/pages/social-logo-lockup.jpg"),
    new Restaurant("Black Pearl", ["Sushi"], "http://northlogancity.org/wp-content/uploads/2017/09/Black-Pearl-e1505395412203.jpg"),
    new Restaurant("Rancherito's", ["24/7", "Mexican", "Sit Down"], "https://rancheritosmexicanfood.com/wp-content/uploads/2020/03/Rancheritos-Mexican-Food-Logo-1.png"),
    new Restaurant("Burger King", ["Drive Thru", "Fast Food", "Sit Down"], "https://cdn.cnn.com/cnnnext/dam/assets/210105120529-04-burger-king-rebranding-large-169.jpg"),
    new Restaurant("Carl's Jr.", ["Drive Thru", "Fast Food", "Sit Down"], "https://upload.wikimedia.org/wikipedia/commons/7/7b/Carls_logo_%281%29.png"),
    new Restaurant("Cold Stone", ["Ice Cream", "Sit Down"], "https://i0.wp.com/www.fb101.com/wp-content/uploads/2019/10/Untitled.png?resize=678%2C381&ssl=1"),
    new Restaurant("Factory Pizzeria", ["Alcohol", "Sit Down", "Pizza"], "https://images.squarespace-cdn.com/content/v1/5743c873746fb9854e8ca2e3/1486389696164-AND226K54XBS8K0CM9OU/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/20160526_215550.jpg"),
    new Restaurant("Fox's Pizza Den", ["Pizza", "Locally Owned"], "https://www.pinclipart.com/picdir/middle/372-3726261_foxs-pizza-den-rewards-foxs-pizza-den-logo.png"),
    new Restaurant("Papa Murphy's", ["Pizza"], "https://www.nrn.com/sites/nrn.com/files/mty-completes-papa-murphys-acquisition-promo.jpg"),
    new Restaurant("Subway", ["Drive Thru", "Sit Down", "Fast Food"], "https://www.subway.com/-/media/Base_English/Images/Branding/subway-logo-new-1200x630.png"),
    new Restaurant("Taco Bell", ["Mexican", "Drive Thru", "Sit Down"], "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Taco_Bell_2016.svg/1200px-Taco_Bell_2016.svg.png"),
    new Restaurant("Del Taco", ["Mexican", "Fast Food", "Drive Thru"], "https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Logo_of_Del_Taco.svg/1200px-Logo_of_Del_Taco.svg.png"),
    new Restaurant("Taco Time", ["Fast Food", "Mexican", "Drive Thru"], "https://www.westsideseattle.com/sites/default/files/images/%5Bdomain-url%5D/%5Bnode-yyyy%5D/%5Bnode-mm%5D/tacotimenw_0.png"),
    new Restaurant("Wendy's", ["Fast Food", "Sit Down", "Drive Thru"], "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Wendy%27s_full_logo_2012.svg/1200px-Wendy%27s_full_logo_2012.svg.png"),
    new Restaurant("Wingers", ["Dine In", "Alcohol"], "https://wingerbros.com/wp-content/uploads/wingers-salt-lake-city-utah-logo.png"),
    // new Restaurant("restrauant", [], ""),
    // new Restaurant("restrauant", [], ""),
    // new Restaurant("restrauant", [], ""),
    // new Restaurant("restrauant", [], ""),
  ];

  constructor(props) {
    super(props);
    this.state = { 
      liked: false,
      filters: [],
      restaurants: this.restarauntOptions
    };
    // console.log("rp:", this)
    // this.addFilter = this.addFilter.bind(this);
  }
 
  filterRestaurants() {
    this.setState(
      {restaurants:
      this.restarauntOptions.filter(item => {
        return this.state.filters.every((filter) => {
          return item.tags.includes(filter);
        })
      })}
    )
  }
  addFilter(event) { // can use arrow instead of binding anywhere....
    // if selected push
    // else remove
    
    let val = event.target.name;
    // console.log("adding: ", val);
    if (event.target.checked) {
      this.state.filters.push(val)
    } else {
      let index = this.state.filters.indexOf(val);
      this.state.filters.splice(index, 1);
    }
    this.filterRestaurants();
    // console.log("filtys: ", this.state.filters);
    // console.log("restys: ", this.state.restaurants);
  }
  render() {
    // without using any additional dependencies:
    //https://medium.com/@chrislewisdev/react-without-npm-babel-or-webpack-1e9a6049714
    return (
      <div>
        <FilterColumns items={this.filterOptions} filter={(filter) => this.addFilter(filter)} />
        <RestaurantList items={this.state.restaurants} key={this.state.restaurants}/>
      </div>
    );
  }
}

const domContainer = document.querySelector('#restaurantPicker');
ReactDOM.render(<RestaurantPicker />, domContainer);