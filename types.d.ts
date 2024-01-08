interface Property {
    id: string;
    name: string;
    desc: string;
    type:
    | "integer"
    | "float"
    | "percent"
    | "text"
    | "longtext"
    | "check"
    | "font"
    | "combo"
    | "group"
    | "link"
    | "info";
    options: {
        initialValue?: any;
        interpolatable: boolean;
        minValue?: number;
        maxValue?: number;
        items?: Array<{ [key: string]: string }>;
        dragSpeedMultiplier?: number;
        linkCallback?: string;
        linkText?: string;
        callbackType?:
        | "for-each-instance"
        | "once-for-type";
        infoCallback?: string;
    };
}

interface Action {
    category: string;
    forward?: string;
    handler?: string;
    autoScriptInterface?: boolean;
    highlight?: boolean;
    deprecated?: boolean;
    isAsync?: boolean;
    params?: Array<{
        id: string;
        name: string;
        desc: string;
        type:
        | "string"
        | "number"
        | "any"
        | "boolean"
        | "combo"
        | "cmp"
        | "object"
        | "objectname"
        | "layer"
        | "layout"
        | "keyb"
        | "instancevar"
        | "instancevarbool"
        | "eventvar"
        | "eventvarbool"
        | "animation"
        | "objinstancevar";
        initialValue?: any;
        items?: Array<{ [key: string]: string }>;
        allowedPluginIds?: string[];
    }>;
    listName: string;
    displayText: string;
    description: string;
}

interface Condition {
    listName: string;
    displayText: string;
    category: string;
    description: string;
    forward?: string;
    handler?: string;
    autoScriptInterface?: boolean;
    highlight?: boolean;
    deprecated?: boolean;
    isTrigger?: boolean;
    isFakeTrigger?: boolean;
    isStatic?: boolean;
    isLooping?: boolean;
    isInvertible?: boolean;
    isCompatibleWithTriggers?: boolean;
    params: Array<{
        id: string;
        name: string;
        desc: string;
        type:
        | "string"
        | "number"
        | "any"
        | "boolean"
        | "combo"
        | "cmp"
        | "object"
        | "objectname"
        | "layer"
        | "layout"
        | "keyb"
        | "instancevar"
        | "instancevarbool"
        | "eventvar"
        | "eventvarbool"
        | "animation"
        | "objinstancevar";
        initialValue?: any;
        items?: Array<{ [key: string]: string }>;
        allowedPluginIds?: string[];
    }>;
}

interface Addon {
    addonType: "behavior" | "plugin" | "effect" | "theme";
    id: string;
    name: string;
    version: string;
    author: string;
    website: string;
    documentation: string;
    description: string;
    icon?: string;
}

interface ProjectAddon extends Addon {
    category: string;
    addonUrl: string;
    githubUrl?: string;
}

interface AceAddon extends ProjectAddon {
    properties: Property[];
    aceCategories: {
        [key: string]: string;
    };
    Acts: {
        [key: string]: Action;
    };
    Cnds: {
        [key: string]: Condition;
    };
    Exps: {
        [key: string]: Expression;
    };
    fileDependencies: Array<{
        filename: string;
        type:
        | "copy-to-output"
        | "inline-script"
        | "external-dom-script"
        | "external-runtime-script"
        | "external-css";
    }>;
}

interface Expression {
    category: string;
    description: string;
    forward?: string;
    handler?: string;
    autoScriptInterface?: boolean;
    highlight?: boolean;
    deprecated?: boolean;
    returnType:
    | "string"
    | "number"
    | "any";
    isVariadicParameters?: boolean;
    params?: Array<{
        id: string;
        name: string;
        desc: string;
        type:
        | "string"
        | "number"
        | "any";
    }>;
}

export interface Theme extends Addon {
    stylesheets: string[];
}

export interface Effect extends ProjectAddon {
    supportedRenderers: ("webgl" | "webgl2" | "webgpu")[];
    blendsBackground: boolean;
    usesDepth: boolean;
    crossSampling: boolean;
    preservesOpaqueness: boolean;
    animated: boolean;
    mustPredraw: boolean;
    extendBox: {
        horizontal: number;
        vertical: number;
    };
    isDeprecated: boolean;
    parameters: Array<{
        id: string;
        name: string;
        desc: string;
        type:
        | "float"
        | "percent"
        | "color";
        value: any;
        uniform: string;
        precision?:
        | "lowp"
        | "mediump"
        | "highmedp"
        | "highp";
        interpolatable: boolean;
    }>;
}

export interface Plugin extends AceAddon {
    type:
    | "object"
    | "world"
    | "dom";
    info: {
        defaultImageUrl?: string;
        Set: {
            IsResizable?: boolean;
            IsRotatable?: boolean;
            Is3D?: boolean;
            HasImage?: boolean;
            IsTiled?: boolean;
            SupportsZElevation?: boolean;
            SupportsColor?: boolean;
            SupportsEffects?: boolean;
            MustPreDraw?: boolean;
            IsSingleGlobal?: boolean;
            CanBeBundled?: boolean;
            IsDeprecated?: boolean;
            GooglePlayServicesEnabled?: boolean;
        };
        AddCommonACEs: {
            Position?: boolean;
            SceneGraph?: boolean;
            Size?: boolean;
            Angle?: boolean;
            Appearance?: boolean;
            ZOrder?: boolean;
        };
    };
}


export interface Behavior extends AceAddon {
    info: {
        Set: {
            IsOnlyOneAllowed: boolean;
            CanBeBundled: boolean;
            IsDeprecated: boolean;
        };
    };
}