import { ButtonGroup, IconButton, Pagination, Center, Flex } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
const myStyle = { "color": "white", "fontWeight": "bold" };

export default function Navigasi({ jlhPegawai, page, onHandleNext, onHandlePrev }) {
    // rumus pagination
    const pageSize = 10;
    const start = ((page - 1) * pageSize + 1);
    const end = (Math.min(page * pageSize, jlhPegawai));


    return (
        <Flex justify="center">
			<Pagination.Root
				count={Number(jlhPegawai)}
				pageSize={pageSize}
				defaultPage={start}			
			>
				<ButtonGroup variant="ghost" size="sm" w="full">
					{/*<Pagination.PageText format="long" flex="1" />*/}
					<Center {...myStyle}>
						Menampilkan data {start} - {end} dari {Number(jlhPegawai)}
					</Center>
					<Pagination.PrevTrigger asChild>
						<IconButton onClick={onHandlePrev}>
							<LuChevronLeft />
						</IconButton>
					</Pagination.PrevTrigger>
					<Pagination.NextTrigger asChild>
						<IconButton onClick={onHandleNext}>
							<LuChevronRight />
						</IconButton>
					</Pagination.NextTrigger>
				</ButtonGroup>
			</Pagination.Root>
		</Flex>
    );
}