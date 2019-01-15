//
//  GraphGenerator.m
//  SnoreStorm
//
//  Created by dave on 2/6/18.
//  Copyright © 2018 Facebook. All rights reserved.
//


#import "GraphGenerator.h"

@implementation GraphGenerator

@synthesize dataArray = _dataArray;

- (id) init {
  
  self = [super init];
  if (self) {
  
    NSLog(@"in view init");
    barChartView = [[JBBarChartView alloc] init];
    barChartView.dataSource = self;
    barChartView.delegate = self;
    
    barChartView.frame = CGRectMake(0,0,300,30);
    //self.frame = CGRectMake(0,0,300,30);
    [self addSubview:barChartView];
  }
  return self;
}

- (void) setDataArray:(NSArray *) data{

  graphData = [[NSArray alloc] initWithArray:data];
  [barChartView reloadDataAnimated:YES];
  
}

- (CGFloat)barChartView:(JBBarChartView *)barChartView heightForBarViewAtIndex:(NSUInteger)index {
  
  return [[graphData objectAtIndex:index] floatValue];
}

- (NSUInteger)numberOfBarsInBarChartView:(JBBarChartView *)barChartView {
  
  return [graphData count];
}

- (UIColor *)barChartView:(JBBarChartView *)barChartView colorForBarViewAtIndex:(NSUInteger)index
{
  return [UIColor colorWithRed:(0) green:(115/255.0) blue:(153/255.0) alpha:1];
}

// for testing only
- (NSArray *) initializeFakeData {
  
  NSMutableArray *fakeData = [NSMutableArray array];
  for (int x=0; x<30; x++){
    int i = rand()%60 +1;
    [fakeData addObject:[NSNumber numberWithInt:i]];
  }
  return fakeData;
}


@end
