import { autowired } from "first-di";

/**
 * todo prepare models
 */
import { StocksDto } from "../models/StocksDto";
import { StocksDto } from "../models/StocksDto";
/**
 * todo prepare view
*/
import { PageView } from "PageView";
/**
 * todo prepare view
*/
import { PageService } from "PageService";


export FilterPageController {
	public stocks: StocksDto[] = [];
  public filter: FilterDto = {};
  
  public readonly view = PageView;

  @autowired()
  private readonly pageService!: PageService;
}