import {
    Loader,
    Texture,
    BaseTexture,
} from 'pixi.js';

export default class MyLoader {
    private static loaders: Loader[] = [];

    public static get loader(): Loader {
        let loader: Loader = null;
        loader = new Loader();
        MyLoader.loaders.push(loader);
        return loader;
    }

    public static async loadAssets(loader: Loader): Promise < void > {
        return new Promise((resolve) => {
            loader.load(() => {
                resolve();
            });
        });
    }

    public static getResource(name: string): PIXI.LoaderResource {
        let resource: PIXI.LoaderResource = null;
        for (let i = 0; i < MyLoader.loaders.length; i++) {
            if (MyLoader.loaders[i].resources[name]) {
                resource = MyLoader.loaders[i].resources[name];
                break;
            }
        }
        return resource;
    }

    public static checkResourceLoaded(key: string): boolean {
        let isLoaded = false;
        for (let i = 0; i < MyLoader.loaders.length; i++) {
            if (MyLoader.loaders[i].resources[key]) {
                isLoaded = true;
                break;
            }
        }
        return isLoaded;
    }

    public static async awaitLoadCompleted(loader: Loader): Promise < void > {
        return new Promise((resolve) => {
            if (loader.loading || loader.progress < 100) {
                loader.onComplete.add(() => {
                    resolve();
                });
            } else { resolve(); }
        });
    }

    public static async loadTexture(url: string): Promise < Texture > {
        return new Promise < Texture >((resolve) => {
            const img = new Image();
            img.crossOrigin = '';
            img.src = url;
            img.onload = () => {
                const base = new BaseTexture(img);
                resolve(new Texture(base));
            };
        });
    }
}
