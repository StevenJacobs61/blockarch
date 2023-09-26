import { useMediaQuery } from "@mui/material";

export function useScreenSize() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('md', 'lg')
  );
  const isLargestScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'))

  return { isSmallScreen, isMediumScreen, isLargeScreen, isLargestScreen };
}