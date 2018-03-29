//
//  ICJWTDecode.h
//  Surface
//
//  Created by Tomáš Hanáček on 9/6/17.
//  Copyright © 2017 InVision LABS. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface ICJWTDecode : NSObject

+ (NSDictionary *)decodeJWT:(NSString *)jwt;

@end
