//
//  NGListener.m
//  event_listener
//
//  Created by Giang Le Ngoc on 9/10/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <RCTViewManager.h>
#import <RCTEventEmitter.h>

@interface NGListener: RCTEventEmitter <RCTBridgeModule,UIAlertViewDelegate>
@end

@implementation NGListener

RCT_EXPORT_MODULE();

- (NSArray<NSString*> *)supportedEvents {
  return @[@"CancelEvent", @"OKEvent"];
}

#pragma mark - Handler event from React

RCT_EXPORT_METHOD(showAlert:(NSString *)msg) {
  
  // We'll show UIAlerView to know listener successful.
  UIAlertView *alert = [[UIAlertView alloc]initWithTitle:nil message:msg delegate:self cancelButtonTitle:@"Cancel" otherButtonTitles:@"OK", nil];
  dispatch_async(dispatch_get_main_queue(), ^{
    [alert show];
  });
  
  
}

#pragma mark - UIAlertView delegate

- (void)alertView:(UIAlertView *)alertView clickedButtonAtIndex:(NSInteger)buttonIndex {
  
  if (buttonIndex == 0) {
    // Sent event tap on Cancel
    [self sendEventWithName:@"CancelEvent" body:@"Tap on Cancel button from Objc"];
    
  } else if (buttonIndex == 1) {
    // Sent event tap on Ok
    [self sendEventWithName:@"OKEvent" body:@"Tap on OK button from Objc"];
  }
}

@end
