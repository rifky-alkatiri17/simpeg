import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function Navigasi() {
    return (
    	<Pagination.Root count={500} pageSize={10} defaultPage={1} maxW="240px">
	      <ButtonGroup variant="ghost" size="sm" w="full">
	        <Pagination.PageText format="long" flex="1" />
	        <Pagination.PrevTrigger asChild>
	          <IconButton>
	            <LuChevronLeft />
	          </IconButton>
	        </Pagination.PrevTrigger>
	        <Pagination.NextTrigger asChild>
	          <IconButton>
	            <LuChevronRight />
	          </IconButton>
	        </Pagination.NextTrigger>
	      </ButtonGroup>	      
	    </Pagination.Root>
    )   
}


