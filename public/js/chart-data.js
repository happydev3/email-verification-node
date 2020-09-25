var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};
var options = {
    multiTooltipTemplate: "<%= label %>: <%= value %>"
}
	var lineChartData = {
		
			labels : ["January","February","March","April","May","June","July"],
			datasets : [
				{
					label: "Market Price",
					fillColor : "rgba(128,130,228,0.6)",
					strokeColor : "rgba(128,130,228,1)",
					pointColor : "rgba(128,130,228,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(128,130,228,1)",
					data : [1.5,1.72,1.51,2.41,2.52,2.27,2.27]
				},
				{
					label: "NAV",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [1.5,1.52,1.41,2.01,2.12,1.87,1.98]
				}
				
			]

		}
		
		var lineChartData1 = {
		
			labels : ["January","February","March","April","May","June","July"],
			datasets : [
				{
					label: "Baseline",
					fillColor : "rgba(128,130,228,0)",
					strokeColor : "rgba(128,130,228,1)",
					pointColor : "rgba(128,130,228,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(128,130,228,1)",
					data : [0,0,0,0,0,0,0]
				},
				{
					label: "Non-Indexed Performance",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [-0.11, 0.12, 0.01, -0.04, 0.05, 0.13,0.182]
				}
				
			]

		}
		
	var barChartData = {
			labels : ["Bitcoin","Ethereum","Ripple","Bitcoin Cash","Cardano","Stellar","NEO","Litecoin","EOS","NEM","IOTA","Dash","Monero","TRON","ICON","QTUM","ETC","VeChain","Bitcoin Gold", "Lisk"],
			datasets : [
				{
					label: "Last Rebalance",
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,0.8)",
					highlightFill: "rgba(220,220,220,0.75)",
					highlightStroke: "rgba(220,220,220,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(), randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(), randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					label: "Now",
					fillColor : "rgba(128,130,228, 0.6)",
					strokeColor : "rgba(128,130,228, 1)",
					highlightFill : "rgba(128,130,228, 0.75)",
					highlightStroke : "rgba(128,130,228, 1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(), randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(), randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]
	
		}

	var pieData = [
				{
					value: 0.1,
					color: "#8082e4",
					highlight: "#7376df",
					label: "Bitcoin"
				},
				{
					value: 0.116,
					color: "#a0a0a0",
					highlight: "#999999",
					label: "Ethereum"
				},
				{
					value: 0.093,
					color:"#dfdfdf",
					highlight: "#cccccc",
					label: "Ripple"
				},
				{
					value: 0.097,
					color: "#f7f7f7",
					highlight: "#eeeeee",
					label: "Bitcoin Cash"
				},
				{
					value: 0.088,
					color: "#8082e4",
					highlight: "#7376df",
					label: "Cardano"
				},
				{
					value: 0.059,
					color: "#a0a0a0",
					highlight: "#999999",
					label: "Neo"
				},
				{
					value: 0.059,
					color:"#dfdfdf",
					highlight: "#cccccc",
					label: "Stellar"
				},
				{
					value: 0.058,
					color: "#f7f7f7",
					highlight: "#eeeeee",
					label: "Litecoin"
				},
				{
					value: 0.048,
					color: "#8082e4",
					highlight: "#7376df",
					label: "Eos"
				},
				{
					value: 0.047,
					color: "#a0a0a0",
					highlight: "#999999",
					label: "Nem"
				},
				{
					value: 0.042,
					color:"#dfdfdf",
					highlight: "#cccccc",
					label: "IOTA"
				},
				{
					value: 0.037,
					color: "#f7f7f7",
					highlight: "#eeeeee",
					label: "Dash"
				},
				{
					value: 0.029,
					color: "#8082e4",
					highlight: "#7376df",
					label: "Monero"
				},
				{
					value: 0.024,
					color: "#a0a0a0",
					highlight: "#999999",
					label: "Tron"
				},
				{
					value: 0.023,
					color:"#dfdfdf",
					highlight: "#cccccc",
					label: "Icon"
				},
				{
					value: 0.018,
					color: "#f7f7f7",
					highlight: "#eeeeee",
					label: "Bitcoin Gold"
				},
				{
					value: 0.018,
					color: "#8082e4",
					highlight: "#7376df",
					label: "Ethereum Classic"
				},
				{
					value: 0.018,
					color: "#a0a0a0",
					highlight: "#999999",
					label: "Qtum"
				},
				{
					value: 0.016,
					color:"#dfdfdf",
					highlight: "#cccccc",
					label: "Lisk"
				},
				{
					value: 0.010,
					color: "#f7f7f7",
					highlight: "#eeeeee",
					label: "VeChain"
				},
				{
					value: 0.15,
					color: "#8082e4",
					highlight: "#7376df",
					label: "ETHLend"
				},
				{
					value: 0.07,
					color: "#a0a0a0",
					highlight: "#999999",
					label: "Medicalchain"
				}

			];
			
	var doughnutData = [
				{
					value: 300,
					color: "#8082e4",
					highlight: "#7376df",
					label: "Value 1"
				},
				{
					value: 50,
					color: "#a0a0a0",
					highlight: "#999999",
					label: "Value 2"
				},
				{
					value: 100,
					color:"#dfdfdf",
					highlight: "#cccccc",
					label: "Value 3"
				},
				{
					value: 120,
					color: "#f7f7f7",
					highlight: "#eeeeee",
					label: "Value 4"
				}
			];
			
	var radarData = {
	    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
	    datasets: [
	        {
	            label: "My First dataset",
	            fillColor: "rgba(220,220,220,0.2)",
	            strokeColor: "rgba(220,220,220,1)",
	            pointColor: "rgba(220,220,220,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(220,220,220,1)",
	            data: [65, 59, 90, 81, 56, 55, 40]
	        },
	        {
	            label: "My Second dataset",
	            fillColor : "rgba(128,130,228, 0.6)",
	            strokeColor : "rgba(128,130,228, 1)",
	            pointColor : "rgba(128,130,228, 1)",
	            pointStrokeColor : "#fff",
	            pointHighlightFill : "#fff",
	            pointHighlightStroke : "rgba(128,130,228, 1)",
	            data: [28, 48, 40, 19, 96, 27, 100]
	        }
	    ]
	};
	var polarData = [
		    {
		    	value: 300,
		    	color: "#8082e4",
		    	highlight: "#7376df",
		    	label: "Value 1"
		    },
		    {
		    	value: 140,
		    	color: "#a0a0a0",
		    	highlight: "#999999",
		    	label: "Value 2"
		    },
		    {
		    	value: 220,
		    	color:"#dfdfdf",
		    	highlight: "#cccccc",
		    	label: "Value 3"
		    },
		    {
		    	value: 250,
		    	color: "#f7f7f7",
		    	highlight: "#eeeeee",
		    	label: "Value 4"
		    }
		
	];