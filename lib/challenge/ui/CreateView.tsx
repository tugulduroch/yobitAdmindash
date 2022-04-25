import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ChallengeViewModel } from "../data/challenge";

export const CreateView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChallengeViewModel>();
  const onSubmit = handleSubmit((input) => {
    console.log(input);
  });
  return (
    <form onSubmit={onSubmit}>
      <FormControl isInvalid={!!errors.title}>
        <FormLabel>Title</FormLabel>
        <Input type="text" {...register("title")} />
        <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
      </FormControl>
    </form>
  );
};
