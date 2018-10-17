# Table Talk Tutor
Table Talk Tutor is a React Native iOS application designed to make you sound cool at parties. 


Built for people who don't like staying glued to social media but also want to stay current with what people are talking about, this application pulls Twitter's Trending Topics and allows you to search them with preset search terms (e.g. "Who is", "News", etc), or with whatever search term you enter. After selecting a search term and pressing submit, the application displays an aggregate list of search results for that search term from Twitter, Bing, and Google. 


For backend code, please see: [table-talk-tutor-backend](https://github.com/smuntean/table-talk-tutor-backend)

## Technologies Used
React Native, Redux, create-react-native-app, Expo, Node.js, React Navigation, React Native Base, React Native Elements, react-native-picker-select, [twitter](https://www.npmjs.com/package/twitter), the Twitter Developer API, the Google Custom Search API, and the Microsoft Azure Search API.

## Contributors
Sara Muntean

## Getting Started
To run this application you must have Expo installed on your computer. Once you `git clone` the repository onto your local machine and install Expo, run `npm install` followed by `npm start`. This will open the application in Expo. You can either view the app using the Expo mobile application on your iPhone, or run on the iOS simulator on the Expo browser tab.

## Challenges

### React Native
Having never built a React Native application, I ran into a number of challenges getting started. React Native is much harder to customize than React, so the biggest challenge I faced was learning how to adapt prebuilt libraries and components to what I needed to use. 

#### React Navigation
Learning the different types of navigation available for a mobile application was one of the most challenging parts of getting started. At first, I built the app using a Tab Navigator. However I realized that this introduced bugs, because the user is meant to move from screen to screen in a specific order, and clicking on the search results screen before actually choosing what to search brought bugs.


I then analyzed user flow and settled on a Stack Navigator. This allowed me to establish a clear user flow and dictate how to user can navigate through the app. Since you can only navigate through stacks through a forward and back button, you can now no longer move to the search results page without submitting something to search. My "stacks" looked like this:

```JavaScript
const Routes = createStackNavigator(
  {
    Discover: {
      screen: SmartTrendsScreen,
      title: 'Discover'
    },
    Search: {
      screen: SearchScreen,
      title: 'Search'
    },
    WebView: {
      screen: WebViewScreen,
      title: 'Explore More'
    }
  },
);
```
Changing the title of each stack in the navigator was a challenge as well. I ended up passing the title down as a parameter, such as this: 

```JavaScript
    this.props.navigation.navigate('Search', {title: 'Search'});
```

And then in each screen stack, I established static navigation options such as this:

```JavaScript
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title,
    headerStyle: {
      backgroundColor: '#2962ff',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#FFF',
      zIndex: 1,
      fontSize: 20,
      lineHeight: 23,
    },
    headerTintColor: '#fff',
    animationEnabled: true
  })
```

In the future, this will also allow me to change the styling of eac header, so color and other properties can change depending on which stack you're on.

#### Interactivity
When I first built the application, I had very little interactivity. Instead of wheel pickers, I used modals, and instead of cards to swipe through search results, I had them simply in a list. This produced a stale, unexciting app that people didn't want to continue playing with once they had completed one search.


Finding external libraries that built interactive components was challenging in and of itself, but customizing them to work with what my vision was was by far the hardest part of building itneractivity. In particular, customizing the ScrollViews to accomplish a sticky effect was very challenging. To accomplish this effect, I used these properties on each ScrollView component:

```JavaScript
      <ScrollView 
        style={{flex: 1}}
        horizontal={true}
        decelerationRate={0}
        snapToInterval={(Dimensions.get('window').width * 0.8) + 24}
        snapToAlignment={"center"}
        >
        {resultRow}
      </ScrollView>
```
In particular, the snapToInterval was challenging to determine. I ended up settling on the width of each card, which scales to each screen size (`Dimensions.get('window').width * 0.8)`), plus 24, which is the amount of total horizontal padding between each card. This sizing is a "sweet spot" size that allows you to see each card in detail but also see a preview on either side of the card if there is a card to the left or right of it. 

### External APIs
The basis of the app is to show the user aggregate search results based on Twitter's Trending Topics. This required the use of three external APIs. While I knew I wanted JSON objects back, getting permissions and finding documentation to retrieve this data was a challenge. 

#### Twitter Developer API
The Twitter API requires many headers in order to get permission to retrieve data. This includes a Consumer API Key, an Applcation API Key, a nonce, and an HMAC-SHA1 encoded signature, that is built using your Consumer Secret and Application Secret. After applying for all of the necessary keys, in order to get data as quickly as possible I used an external library called "twitter" to generate the nonce and signature. 

#### Google Custom Search API
Google recently deprecated it's standard web search API, so in order to search the web you have to create your own Google Custom Search endpoint. This is typically used so that people can include Google-powered search to display data from their own websites. However in my case, I simply wanted to search the entire web.


This required a bit of hackery. In my Custom Search configuration, I first selected a website for primary searching ([saramuntean.com](http://saramuntean.com/)), then added the addition of the entire web. After I was approved, I removed [saramuntean.com](http://saramuntean.com/) as my primary search, and now my only results are from the entire web.

#### Microsoft Azure Search API
The most challenging part of getting data back from the Microsoft Azure Search API was figuring out which key to use for my specific fetch request. Microsoft offers many endpoints for their API services, and different endpoint requires different headers. It took a lot of trial and error to determine which one to use.

### Frontend Fetches
I knew that a big challenge of mine was going to be determing in what order to run my fetch requests to get data from my backend API, which is deployed through AWS. There were two main schools of thought I went through:


1. Group all fetch requests into one big request, and only navigate to my search results stack after all have been resolved using `Promise.all()`


or


2. Make all fetch requests individually and navigate to the results page once the first has been completed.


I settled on the second option so that the time it took for the user to see any search results is optimized. It does generally take a second or so more to see the entire search results page populated with data, but this is a second less that the user has to wait before they see _any_ results. 

