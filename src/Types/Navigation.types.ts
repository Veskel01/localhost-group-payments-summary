import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface ILinks {
  name: string;
  to: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}
