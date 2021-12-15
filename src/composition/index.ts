import { container } from "./core";

import "../settings";
import "../app/composition";
import "../random/composition";

container.registerSingleton<Window>(() => window);

export { container };
