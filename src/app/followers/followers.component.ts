import { Component, OnInit } from '@angular/core';
// import * as D3 from 'd3';
import { MyHttpService } from '../services/app.service'
import { ActivatedRoute, Router } from "@angular/router";
// import { json } from 'd3';
import d3 = require('d3');


@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  login1;
  sub;
  score1;

  items:any[];

  constructor(private myHttp: MyHttpService,
    private route: ActivatedRoute,
    private router: Router) {
    this.myHttp.bSubject.subscribe(data => {
      this.items = data['items']
      this.plot(this.items);
    });

  }
  ngOnInit() {

  }

  plot(data) {
    // this.sub = this.route
    // .queryParams
    // .subscribe(params => {
    //   // Defaults to 0 if no query param provided.
    //   this.items =  params["id"] || 0;
    //   console.log("hereComponent"+this.items)
    // });

    // this.myHttp.getData().subscribe(
    //   data => {
    //     this.posts = data;
    //     this.items = this.posts['items']
    //   }
    // );

    // set the dimensions of the canvas
    var margin = { top: 20, right: 20, bottom: 70, left: 40 },
      width = 1000 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom;
    // set the ranges
    var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
    var y = d3.scale.linear().range([height, 0]);
    // define the axis
    var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom")
    var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(10);
    // add the SVG element
    var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


    data.forEach(function (d) {
      d.login1 = d.login;
      d.score1 = d.score;
    });

    // scale the range of the data
    x.domain(data.map(function (d) { return d.login1; }));
    y.domain([0, d3.max(data, function (d) { return d.score1; })]);
    // add axis
    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)");
    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 5)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Score");
    // Add bar chart
    svg.selectAll("bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function (d) { return x(d.login1); })
      .attr("width", x.rangeBand())
      .attr("y", function (d) { return y(d.score1); })
      .attr("height", function (d) { return height - y(d.score1); });

  }

}
