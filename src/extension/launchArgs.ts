// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

import { RNPackageVersions } from "../common/projectVersionHelper";

/**
 * Defines the supported launch arguments.
 * Add more arguments here as needed.
 */
export interface ILaunchArgs {
    platform: string;
    workspaceRoot: string;
    projectRoot: string;
    nodeModulesRoot: string;
    reactNativeVersions: RNPackageVersions;
    target?: DeviceType;
    debugAdapterPort?: number;
    packagerPort?: any;
    runArguments?: string[];
    env?: any;
    envFile?: string;
    isDirect?: boolean;
    enableDebug?: boolean;
}

export type DeviceType = "simulator" | "device";

export enum PlatformType {
    Android = "android",
    iOS = "ios",
    Windows = "windows",
    Exponent = "exponent",
    macOS = "macos",
}

export type ExpoHostType = "tunnel" | "lan" | "local";

/**
 * Defines the options needed to start debugging a project.
 */

export interface IAndroidRunOptions extends ILaunchArgs {
    variant?: string;
    logCatArguments?: any;
    debugLaunchActivity?: string;
}

export interface IIOSRunOptions extends ILaunchArgs {
    scheme?: string;
    iosRelativeProjectPath?: string; // TODO Remove deprecated
    productName?: string;
    configuration?: string;
}

export interface IExponentRunOptions extends IAndroidRunOptions, IIOSRunOptions {
    expoHostType?: ExpoHostType;
    openExpoQR?: boolean;
}

export type IWindowsRunOptions = ILaunchArgs;
export type ImacOSRunOptions = ILaunchArgs;

export interface IRunOptions
    extends IAndroidRunOptions,
        IIOSRunOptions,
        IExponentRunOptions,
        IWindowsRunOptions {}
