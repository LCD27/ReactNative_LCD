//
//  RNTNativeViewManager.m
//  Github_LCD
//
//  Created by supermap on 2019/3/9.
//  Copyright © 2019年 Facebook. All rights reserved.
//

#import "RNTNativeViewManager.h"
#import "NativeView.h"
@implementation RNTNativeViewManager
RCT_EXPORT_MODULE();
-(UIView*) view{
  return [[NativeView alloc]init];
}
@end
