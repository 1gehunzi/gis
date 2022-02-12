import type { ConfigEnv } from "vite"
import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import examplePlugin from "./build/vite-example-plugin"
import copyPlugin from "rollup-plugin-copy"
import path from "path"
import monacoEditorPlugin from "vite-plugin-monaco-editor"
import eslintPlugin from "vite-plugin-eslint"
import { createStyleImportPlugin, AndDesignVueResolve } from "vite-plugin-style-import"

export default ({ mode }: ConfigEnv) => {
  const root = process.cwd()
  const ENV = loadEnv(mode, root)

  return defineConfig({
    base: ENV.VITE_BASE_URL,
    server: {
      host: "localhost",
      https: false,
      port: 2002
    },
    define: {
      "process.env": {
        mode: mode,
        BASE_URL: ENV.VITE_BASE_URL,
        EXAMPLE_SOURCE_PATH: ENV.VITE_EXAMPLE_SOURCE_PATH,
        EDITOR_MODE: ENV.VITE_EDITOR_MODE !== "0"
      }
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    },
    optimizeDeps: {
      exclude: ["mars3d"]
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            ...getThemeVariables({ dark: true }),
            "border-color-base": "#cde1de",
            "primary-color": "#4db3ff",
            "body-background": "#1c222b",
            "font-size-base": "12px"
          },
          additionalData: `@import "${path.resolve(__dirname, "src/components/mars-ui/base.less")}";`,
          javascriptEnabled: true
        }
      }
    },
    build: {
      // ���·��
      outDir: path.join("./dist", ENV.VITE_BASE_URL),
      // С�ڴ���ֵ�ĵ����������Դ������Ϊ base64 ���룬 �Ա�������http���� ����Ϊ 0, ������ȫ���ô��
      assetsInlineLimit: 4096,
      // ���� / ���� CSS ������
      cssCodeSplit: true,
      // �������Ƿ����� soutrce map �ļ�
      sourcemap: false,
      // ��̬��Դ���ɵ�Ŀ¼
      assetsDir: "example/assets",
      // �Զ���ײ�� Rollup �������
      rollupOptions: {
        input: {
          // index: path.resolve(__dirname, "index.html"),
          editor: path.resolve(__dirname, "editor.html")
          // read: path.resolve(__dirname, "read.html")
        }
      }
    },
    plugins: [
      vue(),
      eslintPlugin({
        cache: false
      }),
      createStyleImportPlugin({
        resolves: [AndDesignVueResolve()],
        libs: [
          {
            libraryName: "ant-design-vue",
            esModule: true,
            resolveStyle: (name) => {
              return `ant-design-vue/es/${name}/style/index`
            }
          }
        ]
      }),
      examplePlugin(mode),
      monacoEditorPlugin({ publicPath: "example/assets" }),
      {
        ...copyPlugin({
          hook: "closeBundle",
          targets: [
            {
              src: "src/components/**/*.vue",
              dest: "dist/vue",
              rename: (_name, _extension, fullPath) => {
                return fullPath.split("components")[1]
              }
            },
            {
              src: "src/example/**/*.*",
              dest: "dist/example",
              rename: (_name, _extension, fullPath) => {
                return fullPath.split("example")[1]
              }
            }
          ]
        })
      }
    ]
  })
}
