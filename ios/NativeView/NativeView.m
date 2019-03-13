//
//  NativeView.m
//  Github_LCD
//
//  Created by supermap on 2019/3/9.
//  Copyright © 2019年 Facebook. All rights reserved.
//

#import "NativeView.h"

@implementation NativeView
- (instancetype)initWithFrame:(CGRect)frame {
  if(self = [super initWithFrame:frame]){
    UIView* view = [[UIView alloc]initWithFrame:CGRectMake(0, 0, 100, 100)];
    view.backgroundColor = [[UIColor alloc]initWithRed:0  green:1 blue:1 alpha:1];
    [self addSubview:view];
    UIButton* btn = [UIButton buttonWithType:UIButtonTypeSystem];
    btn.frame = CGRectMake(0, 0, 100, 100);
    [btn setTitle:@"原生界面" forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(buttonEvent) forControlEvents:UIControlEventTouchUpInside];
    [self addSubview:btn];
  }
  return self;
}

-(void)buttonEvent
{
  NSLog(@"click");
  UIView* view = [[UIView alloc]initWithFrame:CGRectMake(0, 100, 100, 100)];
  view.backgroundColor = UIColor.blueColor;
  [self addSubview:view];
}
/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
}
*/

@end
