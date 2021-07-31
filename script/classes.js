function getPeloClassPool() {

// Returns an array containing the pool of potential Peloton classes.
var peloClassPool = 
	[
// Cycle and Run classes
//************* 20 or 30 Minutes
		{
			peloClass : "Cycle/Run: 20/30 min-Alex/Adrian",
			inUse : false
		},
		{
			peloClass : "Cycle/Run: 20/30 min-Ally/Andy",
			inUse : false
		},
		{
			peloClass : "Cycle/Run: 20/30 min-Ben/Becs",
			inUse : false
		},
				{
			peloClass : "Cycle/Run: 20/30 min-Bradley/Selena",
			inUse : false
		},
		{
			peloClass : "Cycle/Run: 20/30 min-Christine/Chase",
			inUse : false
		},
		{
			peloClass : "Cycle/Run: 20/30 min-Cody/Jess S",
			inUse : false
		},
		{
			peloClass : "Cycle/Run: 20/30 min-Denis/Matty",
			inUse : false
		},
		{
			peloClass : "Cycle/Run: 20/30 min-Emma/Rebecca",
			inUse : false
		},
		{
			peloClass : "Cycle/Run: 20/30 min-Any German Instructor/Selena",
			inUse : false
		},		
		{
			peloClass : "Cycle/Run: 20/30 min-Hannah C/Adrian",
			inUse : false
		},
		{
			peloClass : "Cycle/Run: 20/30 min-Hannah F/Andy",
			inUse : false
		},

		{
			peloClass : "Cycle/Run: 20/30 min-Jen/Becs",
			inUse : false
		},
		{
			peloClass : "Cycle/Run: 20/30 min-Jess King",
			inUse : false
		},
		{
			peloClass : "Cycle/Run: 20/30 min-Kendall/Chase",
			inUse : false
		},
		{
			peloClass : "Cycle/Run: 20/30 min-Leanne/Jess S",
			inUse : false
		},
		{
			peloClass : "Cycle/Run: 20/30 min-Matt",
			inUse : false
		},
		{
			peloClass : "Cycle/Run: 20/30 min-Olivia",
			inUse : false
		},
		{
			peloClass : "Cycle/Run: 20/30 min-Robin",
			inUse : false
		},
		{
			peloClass : "Cycle/Run: 20/30 min-Sam/Matty",
			inUse : false
		},

		{
			peloClass : "Cycle/Run: 20/30 min-Tunde/Rebecca",
			inUse : false
		},
		{
			peloClass : "30 min-Scenic ride or run",
			inUse : false
		},
//**********45 Minutes		
		{
			peloClass : "Cycle/Run: 45 min- Jess K/Matt -- Christian V",
			inUse : false
		},
				{
			peloClass : "Cycle/Run: 45 min- Olivia/Robin -- German Instructor",
			inUse : false
		},
		{
			peloClass : "Cycle/Run: 45 min- Alex/Sam/Hannah C -- Adrian/Jess S",
			inUse : false
		},
		{
			peloClass : "Cycle/Run: 45 min- Ally/Denis/Kendall -- Andy/Rebecca",
			inUse : false
		},
		{
			peloClass : "Cycle/Run: 45 min- Ben/Emma/Cody -- Becs/Matty",
			inUse : false
		},
		{
			peloClass : "Cycle/Run: 45 min- Bradley/Christine/Leanne -- Chase/Selena",
			inUse : false
		},
				{
			peloClass : "Cycle/Run: 45 min- Jenn/Hannah F/Tunde -- Adrian/ Selena",
			inUse : false
		},
//***** Other 
		{
			peloClass : "Cycle/Run: Power Zone/Speed- any duration / instructor ",
			inUse : false
		},		
		{
			peloClass : "Cycle/Run: Low Impact/Endurance- any duration / instructor ",
			inUse : false
		},
		{
			peloClass : "Cycle/Run: Live DJ - any duration / instructor ",
			inUse : false
		},


// Yoga classes
//************* 5/10 Minutes
		{
			peloClass : "Yoga: 5/10 min-Aditi",
			inUse : false
		},
		{
			peloClass : "Yoga: 5/10 min-Anna",
			inUse : false
		},
		{
			peloClass : "Yoga: 5/10 min-Chelsea",
			inUse : false
		},
		{
			peloClass : "Yoga: 5/10 min-Denis",
			inUse : false
		},
				{
			peloClass : "Yoga: 5/10 min-Kirra",
			inUse : false
		},
		{
			peloClass : "Yoga: 5/10 min-Kristin",
			inUse : false
		},
		{
			peloClass : "Yoga: 5/10 min-Mariana",
			inUse : false
		},
		{
			peloClass : "Yoga: 5/10 min-Ross",
			inUse : false
		},
		{
			peloClass : "Yoga: 10 min - Community Kick Off",
			inUse : false
		},
//************* 20/30 Minutes
		{
			peloClass : "Yoga: 20/30 min-Aditi",
			inUse : false
		},
		{
			peloClass : "Yoga: 20/30 min-Anna",
			inUse : false
		},
				{
			peloClass : "Yoga: 20/30 min-Chelsea",
			inUse : false
		},
		{
			peloClass : "Yoga: 20/30 min-Denis",
			inUse : false
		},
				{
			peloClass : "Yoga: 20/30 min-Kirra",
			inUse : false
		},
		{
			peloClass : "Yoga: 20/30 min-Kristin",
			inUse : false
		},
		{
			peloClass : "Yoga: 20/30 min-Mariana",
			inUse : false
		},
		{
			peloClass : "Yoga: 20/30 min-Ross",
			inUse : false
		},
// Strength classes
		{
			peloClass : "Strength: 2x10 min- Adrian/Ben/Emma/J King/Olivia/Tunde",
			inUse : false
		},
		{
			peloClass : "Strength: 2x10 min- Alex/Chase/Hannah C/Kendall/Rebecca",
			inUse : false
		},		
		{
			peloClass : "Strength: 2x10 min- Ally/Christine/Hannah F/Leanne/Robin",
			inUse : false
		},		
		{
			peloClass : "Strength: 2x10 min- Andy/Cody/Jenn/Olivia/Matt/Sam",
			inUse : false
		},		
		{
			peloClass : "Strength: 2x10 min- Becs/Denis/J Sims/Matty/Selena",
			inUse : false
		},
		{
			peloClass : "Strength: 2x10 min- Callie/Rad",
			inUse : false
		},
// Strength classes -- Barre, Pilates, Resistance Bands	
		{
			peloClass : "Strength: 10/15 min-Barre",
			inUse : false
		},
		{
			peloClass : "Strength: 10/15 min-Pilates",
			inUse : false
		},	
		{
			peloClass : "Strength: 10/15 min-Resistance Bands",
			inUse : false
		},		
		
// Meditation classes
//************* 5/10 Minutes
		{
			peloClass : "Meditation: 5/10 min-Aditi",
			inUse : false
		},	
		{	
			peloClass : "Meditation: 5/10 min-Anna",
			inUse : false
		},	
		{	
			peloClass : "Meditation: 5/10 min-Chelsea",
			inUse : false
		},
		{	
			peloClass : "Meditation: 5/10 min-Cody",
			inUse : false
		},
		{	
			peloClass : "Meditation: 5/10 min-Dennis",
			inUse : false
		},	
		{	
			peloClass : "Meditation: 5/10 min-Kristin",
			inUse : false
		},	
		{	
			peloClass : "Meditation: 5/10 min-Ross",
			inUse : false
		},
//************* 15/20 Minutes
		{
			peloClass : "Meditation: 15/20 min-Aditi",
			inUse : false
		},	
		{	
			peloClass : "Meditation: 15/20 min-Anna",
			inUse : false
		},	
		{	
			peloClass : "Meditation: 15/20 min-Chelsea",
			inUse : false
		},

		{	
			peloClass : "Meditation: 15/20 min-Kristin",
			inUse : false
		},	
		{	
			peloClass : "Meditation: 15/20 min-Ross",
			inUse : false
		},		
// Stretch classes
		{
			peloClass : "Stretch: 10 min-Adrian",
			inUse : false
		},
		{
			peloClass : "Stretch: 10 min-Andy",
			inUse : false
		},
		{
			peloClass : "Stretch: 10 min-Becs",
			inUse : false
		},
		{
			peloClass : "Stretch: 10 min-Ben",
			inUse : false
		},
		{
			peloClass : "Stretch: 10 min-Chase",
			inUse : false
		},
		{
			peloClass : "Stretch: 10 min-Hannah C",
			inUse : false
		},
		{
			peloClass : "Stretch: 10 min-Jess Sims",
			inUse : false
		},		
		{
			peloClass : "Stretch: 10 min-Matty",
			inUse : false
		},		
		{
			peloClass : "Stretch: 10 min-Matt",
			inUse : false
		},
		{
			peloClass : "Stretch: 10 min-Olivia",
			inUse : false
		},
		{
			peloClass : "Stretch: 10 min-Rebecca",
			inUse : false
		},
		{
			peloClass : "Stretch: 10 min-Robin",
			inUse : false
		},
		{
			peloClass : "Stretch: 10 min-Selena",
			inUse : false
		},		

// Outdoor Classes
		{
			peloClass : "Outdoor: 20 min-Adrian",
			inUse : false
		},
		{
			peloClass : "Outdoor: 20 min-Andy",
			inUse : false
		},
		{
			peloClass : "Outdoor: 20 min-Becs",
			inUse : false
		},	
		{
			peloClass : "Outdoor: 20 min-Chase",
			inUse : false
		},
		{
			peloClass : "Outdoor: 20 min-Jess Sims",
			inUse : false
		},
		{
			peloClass : "Outdoor: 20 min-Jess King",
			inUse : false
		},
		{
			peloClass : "Outdoor: 20 min-Matt",
			inUse : false
		},
		{
			peloClass : "Outdoor: 20 min-Matty",
			inUse : false
		},	
		{
			peloClass : "Outdoor: 20 min-Olivia",
			inUse : false
		},
		{
			peloClass : "Outdoor: 20 min-Rebecca",
			inUse : false
		},	
		{
			peloClass : "Outdoor: 20 min-Robin",
			inUse : false
		},
		{
			peloClass : "Outdoor: 20 min-Selena",
			inUse : false
		},
// Cardio classes
		// {
		// 	peloClass : "Cardio: 20 min-Dance Cardio",
		// 	inUse : false
		// },
		{
			peloClass : "Cardio/Cycle/Run: Intervals / HIIT - any duration",
			inUse : false
		},
// Bootcamp
		{
			peloClass : "Boot Camp: Any Class",
			inUse : false
		},
// Live classes
		{
			peloClass : "Yoga: Any Live Class",
			inUse : false
		},
		{
			peloClass : "Meditation: Any Live Class",
			inUse : false
		},
		{
			peloClass : "Strength: Any Live Class",
			inUse : false
		},
		{
			peloClass : "Cycle or Run: Any Live Class",
			inUse : false
		},
// Special Classes
		{
			peloClass : "Any Artist Series Class",
			inUse : false
		},
// Challenges
		{
			peloClass : "Complete One Monthly Challenge",
			inUse : false
		},	
		{
			peloClass : "Special Guest Class",
			inUse : false
		},	
// Distance
		// {
		// 	peloClass : "In one day -- cycle 21 miles or run/walk 7",
		// 	inUse : false
		// },
// Bingo Winner Choices
		// {
		// 	peloClass : "Any APIHM Class",
		// 	inUse : false
		// },	
		// {
		// 	peloClass : "Any Mix Tape Ride with Jenn / Theme Run",
		// 	inUse : false
 		// },			
		
	];

    return peloClassPool;
}
export { getPeloClassPool };