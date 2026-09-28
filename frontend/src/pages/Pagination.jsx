import { ButtonGroup, IconButton, Pagination, Center, Flex } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
const myStyle = {"color":"white", "fontWeight":"bold"};

export default function Navigasi({ start, jlhPegawai, onHandleNext, onHandlePrev }) {
	return (
		<Flex justify="center">
			<Pagination.Root
				count={Number(jlhPegawai)}
				pageSize={10}
				defaultPage={start}			
			>
				<ButtonGroup variant="ghost" size="sm" w="full">
					{/*<Pagination.PageText format="long" flex="1" />*/}
					<Center {...myStyle}>
						Menampilkan data {start} - {start+9} dari {Number(jlhPegawai)}
					</Center>
					<Pagination.PrevTrigger asChild onClick={onHandlePrev()}>
						<IconButton>
							<LuChevronLeft />
						</IconButton>
					</Pagination.PrevTrigger>
					<Pagination.NextTrigger asChild onClick={onHandleNext()}>
						<IconButton>
							<LuChevronRight />
						</IconButton>
					</Pagination.NextTrigger>
				</ButtonGroup>
			</Pagination.Root>
		</Flex>
	);
}
