import YAML from "yamljs"
import path from "path"

const swaggerPath = path.join(process.cwd(), "src", "swagger", "swagger.yaml")

export const swaggerDocument = YAML.load(swaggerPath)
