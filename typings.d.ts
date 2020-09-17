/**
 * Added this file so that variable declaration can be visible in the
 * Typescript. This needs to be added in the tsconfig.app.json
 *
 */

declare var module: NodeModule;
declare var stripe: any;
declare var elements: any;

interface NodeModule{
  id: string;
}
